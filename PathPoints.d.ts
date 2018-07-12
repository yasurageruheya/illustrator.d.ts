/**
 * A collection of {@link PathPoint} objects in a specific path. The elements are not named; you must access them by index.
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
 * ･ {@link index}
 * ･ {@link removeAll}
 *
 * @example
 * ➤ Adding a path point to a path
 *    This script illustrates how to add a new path point to an existing path.
 *      // Append a new PathPoint to an existing path
 *      // and initialize its anchor and handle points.
 *
 *      if (app.documents.length > 0) {
 *          var doc = app.activeDocument;
 *          var line = doc.pathItems.add();
 *          line.stroked = true;
 *          line.setEntirePath(Array(Array(220, 475), Array(375, 300)));
 *
 *          // Append another point to the line
 *          var newPoint = doc.pathItems[0].pathPoints.add();
 *
 *          newPoint.anchor = Array(220, 300);
 *          newPoint.leftDirection = newPoint.anchor;
 *          newPoint.rightDirection = newPoint.anchor;
 *          newPoint.pointType = PointType.CORNER;
 *      }
 */
declare class PathPoints
{
	/**
	 * Read-only. The number of objects in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link PathPoints}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link PathPoints}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link PathPoints}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Creates a new {@link PathPoint} object.
	 * @return {PathPoint} {@link PathPoint} object
	 * @see {@link PathPoints}
	 * @since CS2
	 * @version CS2
	 */
	add():PathPoint;

	/**
	 * Gets an element from the collection.
	 * @param {Number} itemKey {@link Number}
	 * @return {PathPoint} {@link PathPoint} object
	 * @see {@link PathPoints}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):PathPoint;

	/**
	 * Deletes all elements in this collection.
	 * @see {@link PathPoints}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;
}