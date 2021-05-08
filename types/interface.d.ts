type DialogFormElement = {
	label: string
	description?: string
	type: 'text' | 'number' | 'checkbox' | 'select' | 'radio' | 'textarea' | 'vector' | 'color' | 'file' | 'folder' | 'save' | 'info' 
	nocolon?: boolean
	readonly?: boolean
	value?: any
	placeholder?: string
	text?: string
	colorpicker?: any
	min?: number
	max?: number
	step?: number
	height?: number
	options?: object
	condition?:Condition
} | {
    text: string
    type: 'info'
} | {
	options?: object
    type: 'select'
}



type DialogForm = {[formElement: string]: '_' | DialogFormElement}

interface DialogOptions<D extends DialogForm> {
	title?: string
	id: string
	draggable?:boolean
	/**
	 * Array of HTML object strings for each line of content in the dialog.
	 */
	lines?: string[]
	/**
	 *  If false, the confirm button of the dialog is disabled
	 */
	confirmEnabled?: boolean
	/**
	 *  If false, the cancel button of the dialog is disabled
	 */
	cancelEnabled?: boolean
	/**
	 *  Function to execute when the user confirms the dialog
	 */
	onConfirm?: (formResult: D) => void
	/**
	 *  Function to execute when the user cancels the dialog
	 */
	onCancel?: () => void
	/**
	 * Creates a form in the dialog
	 */
	form?: D
	/**
	 * Vue component
	 */

	component?: Vue.Component

}

declare class Dialog<D extends DialogForm> {
	constructor (options: DialogOptions<D>)
	show: () => this
	hide: () => this
	/**
	 * Triggers the confirm event of the dialog.
	 */
	confirm: () => void
	/**
	 * Triggers the cancel event of the dialog.
	 */
	cancel: () => void

}
