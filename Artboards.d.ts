/**
 * A collection of {@link Artboard} objects.
 *
 * @since CS4
 * @version CS4
 *
 * <b>Properties</b>
 * ･ {@link length}
 * ･ {@link parent}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 * ･ {@link add}
 * ･ {@link getActiveArtboardIndex}
 * ･ {@link getByName}
 * ･ {@link remove}
 * ･ {@link removeAll}
 * ･ {@link setActiveArtboardIndex}
 */
declare class Artboards
{
	/**
	 * Read-only. The number of artboards in the collection
	 * @const
	 * @type {Number}
	 * @see {@link Artboards}
	 * @since CS4
	 * @version CS4
	 */
	readonly length:Number;

	/**
	 * Read-only. The name of the object that contains this {@link Artboard}
	 * @const
	 * @type {Artboard} {@link Artboard} object
	 * @see {@link Artboards}
	 * @since CS4
	 * @version CS4
	 */
	readonly parent:Artboard;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Artboards}
	 * @since CS4
	 * @version CS4
	 */
	readonly typename:String;

	/**
	 * Creates a new {@link Artboard} object.
	 * @param {Number[]} artboardRect Rect. array of 4 {@link Number}
	 * @return {Artboard} {@link Artboard} object
	 * @see {@link Artboards}
	 * @since CS4
	 * @version CS4
	 */
	add(artboardRect:Number[]):Artboard;

	/**
	 * Retrieves the index position of the active {@link Artboard} in the document's list. Returns the 0-based index.
	 * @return {Number} {@link Number} long
	 * @see {@link Artboards}
	 * @since CS4
	 * @version CS4
	 */
	getActiveArtboardIndex():Number;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {Artboard} {@link Artboard}
	 * @see {@link Artboards}
	 * @since CS4
	 * @version CS4
	 */
	getByName(name:String):Artboard;

	/**
	 * Deletes an {@link Artboard} object.
	 * @param {Number} index {@link Number} long
	 * @see {@link Artboards}
	 * @since CS4
	 * @version CS4
	 */
	remove(index:Number):void;

	/**
	 * Removes all elements in the collection.
	 * @see {@link Artboards}
	 * @since CS4
	 * @version CS4
	 */
	removeAll():void;

	/**
	 * Makes a specific {@link Artboard} active and makes it current in the iteration order.
	 * @param {Number} index {@link Number} long
	 * @see {@link Artboards}
	 * @since CS4
	 * @version CS4
	 */
	setActiveArtboardIndex(index:Number):void;
}