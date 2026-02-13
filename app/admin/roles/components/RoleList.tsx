'use client';

import { useState } from 'react';
import { Role } from '../../../../types/admin';
import PermissionSelector from './PermissionSelector';
import Button from '../../../../components/ui/Button';
import Card from '../../../../components/ui/Card';

interface RoleListProps {
  roles: Role[];
  permissions: string[];
  onUpdateRole: (role: Role) => void;
  onDeleteRole: (id: string) => void;
}

export default function RoleList({ roles, onUpdateRole, onDeleteRole, permissions }: RoleListProps) {
  const [editingRoleId, setEditingRoleId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [editPermissions, setEditPermissions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const startEditing = (role: Role) => {
    setEditingRoleId(role.id);
    setEditName(role.name);
    setEditDescription(role.description);
    setEditPermissions([...role.permissions]);
  };

  const cancelEditing = () => {
    setEditingRoleId(null);
    setEditName('');
    setEditDescription('');
    setEditPermissions([]);
  };

  const togglePermission = (perm: string) => {
    setEditPermissions(prev =>
      prev.includes(perm) ? prev.filter(p => p !== perm) : [...prev, perm]
    );
  };

  const saveEdit = () => {
    if (!editingRoleId) return;
    setLoading(true);
    if (!editName.trim()) {
      alert('Role name is required.');
      setLoading(false);
      return;
    }
    onUpdateRole({
      id: editingRoleId,
      name: editName.trim(),
      description: editDescription.trim(),
      permissions: editPermissions
    });
    cancelEditing();
    setLoading(false);
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Existing Roles</h3>
      {roles.length === 0 ? (
        <p className="text-gray-600">No roles defined yet.</p>
      ) : (
        <div className="space-y-4">
          {roles.map(role => (
            <Card key={role.id} className="p-4">
              {editingRoleId === role.id ? (
                <>
                  <input
                    type="text"
                    className="border border-gray-300 rounded w-full px-2 py-1 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={editName}
                    onChange={e => setEditName(e.target.value)}
                    aria-label="Edit Role Name"
                  />
                  <textarea
                    className="border border-gray-300 rounded w-full px-2 py-1 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={editDescription}
                    onChange={e => setEditDescription(e.target.value)}
                    rows={2}
                    aria-label="Edit Role Description"
                    placeholder="Optional description"
                  />
                  <PermissionSelector
                    permissions={permissions}
                    selectedPermissions={editPermissions}
                    togglePermission={togglePermission}
                  />
                  <div className="flex gap-2 mt-3">
                    <Button onClick={saveEdit} disabled={loading}>
                      {loading ? 'Saving...' : 'Save'}
                    </Button>
                    <Button onClick={cancelEditing} variant="secondary">
                      Cancel
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <h4 className="font-semibold text-lg">{role.name}</h4>
                  <p className="text-sm text-gray-700 mb-2">
                    {role.description || <em className="text-gray-400">No description</em>}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {role.permissions.length > 0 ? (
                      role.permissions.map(p => (
                        <span key={p} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
                          {p}
                        </span>
                      ))
                    ) : (
                      <em className="text-gray-400 text-xs">No permissions assigned</em>
                    )}
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button onClick={() => startEditing(role)} size="sm">
                      Edit
                    </Button>
                    <Button onClick={() => onDeleteRole(role.id)} size="sm" variant="danger">
                      Delete
                    </Button>
                  </div>
                </>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
