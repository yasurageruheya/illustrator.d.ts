/**
 * Associates character attributes with characters. For an example, see {@link CharacterStyles}.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link characterAttributes}
 * ･ {@link name}
 * ･ {@link parent}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 * ･ {@link applyTo}
 * ･ {@link remove}
 */
declare class CharacterStyle
{
	/**
	 * Read-only. The character properties for the style.
	 * @const
	 * @type {CharacterAttributes} {@link CharacterAttributes} object
	 * @see {@link CharacterStyle}
	 * @since CS2
	 * @version CS2
	 */
	readonly characterAttributes:CharacterAttributes;

	/**
	 * The character style’s name.
	 * @type {String}
	 * @see {@link CharacterStyle}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * Read-only. The object’s container.
	 * @const
	 * @type {Object}
	 * @see {@link CharacterStyle}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link CharacterStyle}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Applies the character style to the text object or objects.
	 * @param {Object} textItem {@link Object}
	 * @param {Boolean} [clearingOverrides] {@link Boolean}
	 * @see {@link CharacterStyle}
	 * @since CS2
	 * @version CS2
	 */
	applyTo(textItem:Object, clearingOverrides?:Boolean):void;

	/**
	 * Deletes the object.
	 * @see {@link CharacterStyle}
	 * @since CS2
	 * @version CS2
	 */
	remove():void;
}