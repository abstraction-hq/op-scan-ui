import create from 'zustand';

interface OperationStoreState {
    data: any;
    loading: boolean;
    error: string | null;
    fetchData: (operationId: string) => Promise<void>;
}

const useOperationStore = create<OperationStoreState>((set) => ({
    data: null,
    loading: false,
    error: null,
    fetchData: async (operationId: string) => {
        set({ loading: true, error: null });
        try {
            const response = await fetch(`https://wallet.abstraction.world/api/v1/tx/${operationId}`);
            const data = await response.json();
            set({ data, loading: false });
        } catch (error: any) {
            set({ error: error.message, loading: false });
        }
    }
}));

export default useOperationStore;
