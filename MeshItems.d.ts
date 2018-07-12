/**
 * A collection of {@link MeshItem} objects.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link length}
 * ･ {@link parent}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 * ･ {@link getByName}
 * ･ {@link index}
 * ･ {@link removeAll}
 *
 * @example
 * ➤ Copying mesh items to another document
 *     To run this script, have two open documents. One document should contain at least one mesh item, the
 *     other document can be empty. Make the empty document the frontmost before running the script.
 *       // Copies all mesh items from one document to a new document
 *
 *       if (app.documents.length > 0) {
 *           var srcDoc = documents[0];
 *           var locationOffset = 0;
 *           var targetDoc = documents.add();
 *
 *           for (i = 0; i < srcDoc.meshItems.length; i++) {
 *               srcItem = srcDoc.meshItems[i];
 *               var dupItem = srcDoc.meshItems[i].duplicate(targetDoc, ElementPlacement.PLACEATEND);
 *
 *               // offset the copied items’ position on the y axis
 *               dupItem.position = Array(100, 50 + locationOffset);
 *               locationOffset += 50;
 *           }
 *       }
 */
declare class MeshItems
{
	/**
	 * Read-only. The number of objects in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link MeshItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link MeshItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link MeshItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {MeshItem} {@link MeshItem} object
	 * @see {@link MeshItems}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):MeshItem;

	/**
	 * Gets an element from the collection.
	 * @param {String | Number} itemKey {@link String} or {@link Number}
	 * @return {MeshItem} {@link MeshItem} object
	 * @see {@link MeshItems}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):MeshItem;

	/**
	 * Deletes all elements in this collection.
	 * @see {@link MeshItems}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}