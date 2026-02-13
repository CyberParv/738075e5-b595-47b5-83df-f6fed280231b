export const PERMISSIONS = [
  'read_users',
  'write_users',
  'delete_users',
  'read_roles',
  'write_roles',
  'delete_roles',
  'read_products',
  'write_products',
  'delete_products',
  'read_orders',
  'write_orders',
  'delete_orders'
];

import { Role } from '../types/admin';

export const DEFAULT_ROLES: Role[] = [
  {
    id: 'admin',
    name: 'Administrator',
    description: 'Full access to all system features and settings.',
    permissions: [...PERMISSIONS]
  },
  {
    id: 'viewer',
    name: 'Viewer',
    description: 'Can view data but cannot modify.',
    permissions: [
      'read_users',
      'read_roles',
      'read_products',
      'read_orders'
    ]
  }
];
