'use client';

import { useState, FormEvent } from 'react';
import { Role } from '../../../../types/admin';
import PermissionSelector from './PermissionSelector';
import { v4 as uuidv4 } from 'uuid';
import Button from '../../../../components/ui/Button';
import Input from '../../../../components/ui/Input';

interface RoleFormProps {
  permissions: string[];
  onAddRole: (role: Role) => void;
}

export default function RoleForm({ permissions, onAddRole }: RoleFormProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const togglePermission = (perm: string) => {
    setSelectedPermissions(prev =>
      prev.includes(perm) ? prev.filter(p => p !== perm) : [...prev, perm]
    );
  };

  const resetForm = () => {
    setName('');
    setDescription('');
    setSelectedPermissions([]);
    setError(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim()) {
      setError('Role name is required.');
      return;
    }
    setLoading(true);

    try {
      const newRole: Role = {
        id: uuidv4(),
        name: name.trim(),
        description: description.trim(),
        permissions: selectedPermissions
      };
      onAddRole(newRole);
      resetForm();
    } catch {
      setError('Failed to add role.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h3 className="text-xl font-semibold mb-4">Create New Role</h3>
      {error && <p className="mb-2 text-red-600">{error}</p>}
      <Input
        id="roleName"
        label="Role Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <div className="mb-4">
        <label htmlFor="roleDescription" className="block mb-1 font-medium">
          Description
        </label>
        <textarea
          id="roleDescription"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
          placeholder="Optional role description"
        />
      </div>
      <PermissionSelector
        permissions={permissions}
        selectedPermissions={selectedPermissions}
        togglePermission={togglePermission}
      />
      <Button type="submit" className="mt-4" disabled={loading}>
        {loading ? 'Adding...' : 'Add Role'}
      </Button>
    </form>
  );
}
