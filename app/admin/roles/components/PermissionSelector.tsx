'use client';

interface PermissionSelectorProps {
  permissions: string[];
  selectedPermissions: string[];
  togglePermission: (perm: string) => void;
}

export default function PermissionSelector({ permissions, selectedPermissions, togglePermission }: PermissionSelectorProps) {
  return (
    <fieldset className="mb-4">
      <legend className="font-medium mb-2">Permissions</legend>
      <div className="grid grid-cols-2 gap-2 max-h-48 overflow-auto border border-gray-300 rounded p-2">
        {permissions.map(perm => (
          <label key={perm} className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              checked={selectedPermissions.includes(perm)}
              onChange={() => togglePermission(perm)}
              className="cursor-pointer"
            />
            <span>{perm}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
