/**
 * A point on a specific path. Each path point is made up of an anchor point ({@link PathPoint#anchor}) and a pair of handles ({@link PathPoint#leftDirection} and {@link PathPoint#rightDirection}).
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link anchor}
 * ･ {@link leftDirection}
 * ･ {@link parent}
 * ･ {@link pointType}
 * ･ {@link rightDirection}
 * ･ {@link selected}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 * ･ {@link remove}
 */
declare class PathPoint
{
	/**
	 * The position of this point’s anchor point.
	 * @type {Number[]} array of 2 numbers
	 * @see {@link PathPoint}
	 * @since CS2
	 * @version CS2
	 */
	anchor:Number[];

	/**
	 * The position of this path point’s in control point.
	 * @type {Number[]} array of 2 numbers
	 * @see {@link PathPoint}
	 * @since CS2
	 * @version CS2
	 */
	leftDirection:Number[];

	/**
	 * Read-only. The path item that contains this path point.
	 * @const
	 * @type {PathItem} {@link PathItem} object
	 * @see {@link PathPoint}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:PathItem;

	/**
	 * The type of path point, either a curve or a corner. Any point can considered a corner point. Setting the type to a corner forces the left and right direction points to be on a straight line when the user attempts to modify them in the user interface.
	 * @type {PointType}
	 * @see {@link PathPoint}
	 * @since CS2
	 * @version CS2
	 */
	pointType:PointType;

	/**
	 * The position of this path point’s out control point.
	 * @type {Number[]} array of 2 numbers
	 * @see {@link PathPoint}
	 * @since CS2
	 * @version CS2
	 */
	rightDirection:Number[];

	/**
	 * Are points of this path point selected, and if so, which ones.
	 * @type {PathPointSelection}
	 * @see {@link PathPoint}
	 * @since CS2
	 * @version CS2
	 */
	selected:PathPointSelection;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link PathPoint}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Removes the referenced point from the path.
	 * @see {@link PathPoint}
	 * @since CS2
	 * @version CS2
	 */
	remove():void;
}