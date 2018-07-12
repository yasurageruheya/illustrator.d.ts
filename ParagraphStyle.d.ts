/**
 * Associates character and paragraph attributes with a style name. The style object can be used to apply those attributes to the text in a {@link TextFrame} object. See <a href="psi_element://ParagraphStyles">Creating and applying a paragraph style</a> below.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link characterAttributes}
 * ･ {@link name}
 * ･ {@link paragraphAttributes}
 * ･ {@link parent}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 * ･ {@link applyTo}
 * ･ {@link remove}
 */
declare class ParagraphStyle
{
	/**
	 * Read-only. The character properties for the text range.
	 * @const
	 * @type {CharacterAttributes} {@link CharacterAttributes} object
	 * @see {@link ParagraphStyle}
	 * @since CS2
	 * @version CS2
	 */
	readonly characterAttributes:CharacterAttributes;

	/**
	 * The paragraph style’s name.
	 * @type {String}
	 * @see {@link ParagraphStyle}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * Read-only. The paragraph properties for the text range.
	 * @const
	 * @type {ParagraphAttributes} {@link ParagraphAttributes} object
	 * @see {@link ParagraphStyle}
	 * @since CS2
	 * @version CS2
	 */
	readonly paragraphAttributes:ParagraphAttributes;

	/**
	 * Read-only. The object’s container.
	 * @const
	 * @type {Object}
	 * @see {@link ParagraphStyle}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link ParagraphStyle}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Applies this paragraph style to the specified text item.
	 * @param {Object} textItem {@link Object}
	 * @param {Boolean} [clearingOverrides] {@link Boolean}
	 * @see {@link ParagraphStyle}
	 * @since CS2
	 * @version CS2
	 */
	applyTo(textItem:Object, clearingOverrides?:Boolean):void;

	/**
	 * Deletes the object.
	 * @see {@link ParagraphStyle}
	 * @since CS2
	 * @version CS2
	 */
	remove():void;
}