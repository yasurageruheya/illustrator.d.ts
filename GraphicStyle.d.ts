/**
 * A graphic style. Each graphic style defines a set of appearance attributes that you can apply nondestructively to page items. Graphic styles are contained in documents. Scripts cannot create new graphic styles.
 *
 * @since CS2
 * @version CS3
 *
 * <b>Properties</b>
 * ･ {@link name}
 * ･ {@link parent}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 * ･ {@link applyTo}
 * ･ {@link mergeTo}
 * ･ {@link remove}
 *
 * @example
 * ➤ Applying a graphic style
 *     // Duplicates each path item in the selection, places the duplicate into a
 *     // new group, then applies a graphic style to the new groups items
 *
 *     if (app.documents.length > 0) {
 *         var doc = app.activeDocument;
 *         var selected = doc.selection;
 *
 *         var newGroup = doc.groupItems.add();
 *         newGroup.name = "NewGroup";
 *         newGroup.move(doc, ElementPlacement.PLACEATEND);
 *
 *         var endIndex = selected.length;
 *         for (i = 0; i < endIndex; i++) {
 *             if (selected[i].typename == "PathItem") selected[i].duplicate(newGroup, ElementPlacement.PLACEATEND);
 *         }
 *         for (i = 0; i < newGroup.pageItems.length; i++) {
 *             doc.graphicStyles[1].applyTo(newGroup.pageItems[i]);
 *         }
 *     }
 */
declare class GraphicStyle
{
	/**
	 * The graphic style name.
	 * @type {String}
	 * @see {@link GraphicStyle}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * Read-only. The document that contains this graphic style.
	 * @const
	 * @type {Document} {@link Document} object
	 * @see {@link GraphicStyle}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Document;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link GraphicStyle}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Applies this art style to a specified art item.
	 * @param {PageItem} artItem {@link PageItem} object
	 * @see {@link GraphicStyle}
	 * @since CS2
	 * @version CS2
	 */
	applyTo(artItem:PageItem):void;

	/**
	 * Merges this art style into the current styles of a specified art item.
	 * @param {PageItem} artItem {@link PageItem} object
	 * @see {@link GraphicStyle}
	 * @since CS3
	 * @version CS3
	 */
	mergeTo(artItem:PageItem):void;

	/**
	 * Deletes this object.
	 * @see {@link GraphicStyle}
	 * @since CS2
	 * @version CS2
	 */
	remove():void;
}