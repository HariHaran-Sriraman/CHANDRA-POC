// store/vaultStore.ts
import { create } from "zustand";

interface VaultFormValues {
  environment: string;
  vaultAddress: string;
  roleId: string;
  idType: string;
  vaultIdPath: string;
  vaultIdRenewalInterview: string;
  passwordRotationThreshold: string;
  passwordRotationEnabled: string;
  passwordRotationAccount: string;
  ait: string;
  appName: string;
  templateSourcePath: string;
  templateDestinationPath: string;
}

interface VaultState {
  formValues: VaultFormValues;
  setFormValues: (values: Partial<VaultFormValues>) => void;
}

export const useVaultStore = create<VaultState>((set) => ({
  formValues: {
    environment: "Development",
    vaultAddress: "Address1",
    roleId: "defaultRole",
    idType: "User",
    vaultIdPath: "/vault/path",
    vaultIdRenewalInterview: "30",
    passwordRotationThreshold: "90",
    passwordRotationEnabled: "Yes",
    passwordRotationAccount: "account123",
    ait: "AIT001",
    appName: "MyApp",
    templateSourcePath: "/templates/source",
    templateDestinationPath: "/templates/destination",
  },
  setFormValues: (values) =>
    set((state) => ({
      formValues: { ...state.formValues, ...values },
    })),
}));