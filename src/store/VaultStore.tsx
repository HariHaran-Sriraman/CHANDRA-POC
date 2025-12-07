// store/vaultStore.ts
import { create } from "zustand";
import axios from "axios";

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

interface VaultOptions {
  environments: string[];
  vaultAddresses: string[];
  idTypes: string[];
  passwordRotationEnabledOptions: string[];
}

interface VaultState {
  formValues: VaultFormValues;
  options: VaultOptions;
  setFormValues: (values: Partial<VaultFormValues>) => void;
  fetchInitialData: () => Promise<void>;
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
  options: {
    environments: ["Development", "Staging", "Production"],
    vaultAddresses: ["Address1", "Address2", "Address3"],
    idTypes: ["User", "Service", "Admin"],
    passwordRotationEnabledOptions: ["Yes", "No"],
  },
  setFormValues: (values) =>
    set((state) => ({
      formValues: { ...state.formValues, ...values },
    })),
    fetchInitialData: async () => {
    try {
      // 🔧 Replace with your real API endpoint later
      const response = await axios.get("/api/vault/init");

      // Assume API returns { formValues: {...}, options: {...} }
      const { formValues, options } = response.data;

      set({
        formValues: formValues || {},
        options: options || {
          environments: [],
          vaultAddresses: [],
          idTypes: [],
          passwordRotationEnabledOptions: [],
        },
      });
    } catch (error) {
      console.error("Failed to fetch initial data:", error);
    }
  }
}));