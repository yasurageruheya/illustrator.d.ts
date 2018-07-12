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
 *    This example illustrates how to delete all layers whose name starts with the word “Temp” in all open documents.
 *      // Delete layers whose name begins with "Temp" in all open documents
 *
 *      // loop through all open documents
 *      var layersDeleted = 0;
 *      for (i = 0; i < app.documents.length; i++) {
 *          var targetDocument = app.documents[i];
 *          var layerCount = targetDocument.layers.length;
 *          // Loop through layers from the back, to preserve index
 *          // of remaining layers when we remove one
 *          for (j = layerCount - 1; j >= 0; j--) {
 *              targetLayer = targetDocument.layers[j];
 *              var layerName = new String(targetLayer.name);
 *              if (layerName.indexOf("Temp") == 0) {
 *                  targetDocument.layers[j].remove();
 *                  layersDeleted++;
 *              }
 *          }
 *      }
 *      alert("Layer deleted: " + layersDeleted);
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