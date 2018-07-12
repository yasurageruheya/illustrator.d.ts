/**
 * The collection of layers in the document.
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
 * ･ {@link add}
 * ･ {@link getByName}
 * ･ {@link index}
 * ･ {@link removeAll}
 *
 * @example
 * ➤ Finding and deleting layers
 *     // Deletes all layers whose name begins with "Temp" in all open documents
 *
 *     // loop through all open documents
 *     var layersDeleted = 0;
 *     for (i = 0; i < app.documents.length; i++) {
 *         var targetDocument = app.documents[i];
 *         var layerCount = targetDocument.layers.length;
 *         // Loop through layers from the back, to preserve index
 *         // of remaining layers when we remove one
 *         for (var ii = layerCount - 1; ii >= 0; ii--) {
 *             targetLayer = targetDocument.layers[ii];
 *             var layerName = new String(targetLayer.name);
 *             if (layerName.indexOf("Temp") == 0) {
 *                 targetDocument.layers[ii].remove();
 *                 layersDeleted++;
 *             }
 *         }
 *     }
 */
declare class Layers
{
	/**
	 * Read-only. The number of objects in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link Layers}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link Layers}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Layers}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Creates a new layer in the document.
	 * @return {Layer} {@link Layer} object
	 * @see {@link Layers}
	 * @since CS2
	 * @version CS2
	 */
	add():Layer;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {Layer} {@link Layer} object
	 * @see {@link Layers}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):Layer;

	/**
	 * Gets an element from the collection.
	 * @param {String | Number} itemKey {@link String} or {@link Number}
	 * @return {Layer} {@link Layer} object
	 * @see {@link Layers}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):Layer;

	/**
	 * Deletes all elements in this collection.
	 * @see {@link Layers}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}