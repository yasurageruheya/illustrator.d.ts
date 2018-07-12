/**
 * An art item that is stored in the Symbols Palette, and can be reused one or more times in the document without duplicating the art data. Symbols are contained in documents. Instances of {@link Symbol} in a document are associated with {@link SymbolItem} objects, which store the art-object properties.
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
 * ･ {@link duplicate}
 * ･ {@link remove}
 */
declare class Symbol
{
	/**
	 * The symbol’s name.
	 * @type {String}
	 * @see {@link Symbol}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * Read-only. The object that contains the symbol object.
	 * @const
	 * @type {Object}
	 * @see {@link Symbol}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Symbol}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Create a duplicate of this object.
	 * @return {Symbol} {@link Symbol} object
	 * @see {@link Symbol}
	 * @since CS2
	 * @version CS2
	 */
	duplicate():Symbol;

	/**
	 * Deletes this object.
	 * @see {@link Symbol}
	 * @since CS2
	 * @version CS2
	 */
	remove():void;
}