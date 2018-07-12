/**
 * A brush in an Illustrator document. {@link Brushes} are contained in documents. Additional brushes may be created by the user within Illustrator. You can access brushes within a script, but you cannot create them.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link name}
 * ･ {@link parent}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 * ･ {@link applyTo}
 *
 * @example
 * ➤ Applying a brush
 *     // Duplicates and groups all items in the current selection,
 *     // then applies the same brush to each item in the group
 *
 *     if (app.documents.length > 0) {
 *         docSelection = app.activeDocument.selection;
 *         if (docSelection.length > 0) {
 *             newGroup = app.activeDocument.groupItems.add();
 *
 *             for (i = 0; i < docSelection.length; i++) {
 *                 newItem = docSelection[i].duplicate();
 *                 newItem.moveToBeginning(newGroup);
 *             }
 *             brush4 = app.activeDocument.brushes[1];
 *             brush4.applyTo(newGroup);
 *         }
 *     }
 */
declare class Brush
{
	/**
	 * The name of the {@link Brush}.
	 * @type {String}
	 * @see {@link Brush}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * Read-only. The document that contains this {@link Brush}.
	 * @const
	 * @type {Document} {@link Document} object
	 * @see {@link Brush}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Document;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Brush}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Applies the {@link Brush} to a specific art item.
	 * @param {PageItem} artItem {@link PageItem} object
	 * @see {@link Brush}
	 * @since CS2
	 * @version CS2
	 */
	applyTo(artItem:PageItem):void;
}