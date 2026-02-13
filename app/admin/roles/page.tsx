'use client';

import { useState } from 'react';
import RoleList from './components/RoleList';
import RoleForm from './components/RoleForm';
import { Role } from '../../../types/admin';
import { PERMISSIONS, DEFAULT_ROLES } from '../../../lib/constants';

export default function AdminRoleSetup() {
  const [roles, setRoles] = useState<Role[]>([...DEFAULT_ROLES]);

  const addRole = (role: Role) => {
    setRoles(prev => [...prev, role]);
  };

  const updateRole = (updatedRole: Role) => {
    setRoles(prev => prev.map(r => (r.id === updatedRole.id ? updatedRole : r)));
  };

  const deleteRole = (id: string) => {
    setRoles(prev => prev.filter(r => r.id !== id));
  };

  return (
    <section className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Role Setup</h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <RoleForm permissions={PERMISSIONS} onAddRole={addRole} />
        </div>
        <div className="md:w-1/2">
          <RoleList roles={roles} onUpdateRole={updateRole} onDeleteRole={deleteRole} permissions={PERMISSIONS} />
        </div>
      </div>
    </section>
  );
}
