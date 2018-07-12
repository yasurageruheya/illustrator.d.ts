/**
 * An Illustrator pattern definition contained in a document. {@link Patterns} are shown in the {@link Swatches} palette. Each pattern is referenced by a {@link PatternColor} object, which defines the pattern’s appearance.
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
 * ･ {@link remove}
 * ･ {@link toString}
 */
declare class Pattern
{
	/**
	 * The pattern name.
	 * @type {String}
	 * @see {@link Pattern}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * Read-only. The document that contains this pattern.
	 * @const
	 * @type {Document} {@link Document}
	 * @see {@link Pattern}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Document;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Pattern}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Removes the referenced pattern from the document.
	 * @see {@link Pattern}
	 * @since CS2
	 * @version CS2
	 */
	remove():void;

	/**
	 * Returns the object type of a referenced object. If the object has a name, also returns the name.
	 * @return {String} {@link String}
	 * @see {@link Pattern}
	 * @since CS2
	 * @version CS2
	 */
	toString():String;
}