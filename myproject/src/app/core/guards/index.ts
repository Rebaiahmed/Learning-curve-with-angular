import { AuthGuard } from './auth-guard';
import { AdminGuard } from './admin-guard';

export * from './auth-guard';
export * from './admin-guard';

export const authGuardServices = [AuthGuard, AdminGuard];
