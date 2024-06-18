export type ExpenseListType = {
    id: string
    amount: number
    category: string
    date: string
    note: string
}

export type ExpenseModalProps = {
    isOpen: boolean
    onClose: ()=>void
    onSave: ()=>void

}