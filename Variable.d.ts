/**
 * A document-level variable that can be imported or exported.
 * A variable is a dynamic object used to create data-driven graphics. For an example, see {@link Dataset}. Variables are accessed in Illustrator through the Variables palette.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link kind}
 * ･ {@link name}
 * ･ {@link pageItems}
 * ･ {@link parent}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 * ･ {@link remove}
 */
declare class Variable
{
	/**
	 * The variable’s type.
	 * @type {VariableKind}
	 * @see {@link Variable}
	 * @since CS2
	 * @version CS2
	 */
	kind:VariableKind;

	/**
	 * The name of the variable.
	 * @type {String}
	 * @see {@link Variable}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * Read-only. All of the artwork in the variable.
	 * @const
	 * @type {PageItems} {@link PageItems} collection object
	 * @see {@link Variable}
	 * @since CS2
	 * @version CS2
	 */
	readonly pageItems:PageItems;

	/**
	 * Read-only. The object that contains the variable.
	 * @const
	 * @type {Object}
	 * @see {@link Variable}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Variable}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Removes the variable from the collection of variables.
	 * @see {@link Variable}
	 * @since CS2
	 * @version CS2
	 */
	remove():void;
}