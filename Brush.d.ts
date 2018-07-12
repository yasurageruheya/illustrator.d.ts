/**
 * A brush in an Illustrator document. Brushes are contained in documents. Additional brushes may be created by the user within Illustrator. You can access brushes within a script, but you cannot create them.
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
 *     This example duplicates and groups the current selection, applying the third art style in the document to
 *     the items in the group.
 *       // Duplicate and group the current selection,
 *       // and apply a brush to the items as a group
 *
 *       if (app.documents.length > 0) {
 *           docSelection = app.activeDocument.selection;
 *           if (docSelection.length > 0) {
 *               newGroup = app.activeDocument.groupItems.add();
 *
 *               for (i = 0; i < docSelection.length; i++) {
 *                   newItem = docSelection[i].duplicate();
 *                   newItem.moveToBeginning(newGroup);
 *               }
 *               brush4 = app.activeDocument.brushes[3];
 *               brush4.applyTo(newGroup);
 *           }
 *       }
 */
declare class Brush
{
	/**
	 * The name of the <b>brush</b>.
	 * @type {String}
	 * @see {@link Brush}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * Read-only. The document that contains this <b>brush</b>.
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
	 * Applies the <b>brush</b> to a specific art item.
	 * @param {PageItem} artItem {@link PageItem} object
	 * @see {@link Brush}
	 * @since CS2
	 * @version CS2
	 */
	applyTo(artItem:PageItem):void;
}