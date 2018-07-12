/**
 * A collection of {@link NonNativeItem} objects.
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
 * ･ {@link getByName}
 */
declare class NonNativeItems
{
	/**
	 * Read-only. The number of objects in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link NonNativeItems}
	 * @since CS4
	 * @version CS4
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link NonNativeItems}
	 * @since CS4
	 * @version CS4
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link NonNativeItems}
	 * @since CS4
	 * @version CS4
	 */
	readonly typename:String;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {NonNativeItem|SymbolItem} {@link NonNativeItem} object or {@link SymbolItem} object
	 * @see {@link NonNativeItems}
	 * @since CS4
	 * @version CS4
	 */
	getByName(name:String):NonNativeItem|SymbolItem;
}