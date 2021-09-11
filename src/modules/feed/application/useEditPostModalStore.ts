import create from "zustand";

export const useEditPostModalStore = create<any>((set) => ({
  selectedItem: null,
  isOpen: false,
  onOpen(item: any) {
    set({ selectedItem: item, isOpen: true });
  },
  onClose() {
    set({ selectedItem: null, isOpen: false });
  },
}));
