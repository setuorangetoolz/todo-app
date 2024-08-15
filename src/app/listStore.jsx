import {create} from "zustand";
import {devtools, persist} from 'zustand/middleware'

const listStore = (set) => ({
    lists: [],
    addListItem: (list) => {
        set((state) => ({
            lists: [list, ...state.lists]
        }))
    },
    removeLisItem: (listId) => {
        set((state) => ({
            lists: state.lists.filter((item) => item.id !== listId)
        }))
    },
    toggleListItemState: (listId) => {
        set((state) => ({
            lists: state.lists.map((item) => item.id === listId ? {...item, checked: !item.checked} : item)
        }))
    },
    clearAllLists: () => {
        set({lists: []})
    }
})

const useCreateStore = create(devtools(persist(listStore, {name: 'todo-lists'})))

export default useCreateStore;