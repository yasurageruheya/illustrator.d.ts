/**
 * A document view in an Illustrator document, which represents a window view onto a document. Scripts cannot create new views, but can modify some properties of existing views, including the center point, screen mode, and zoom.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link bounds}
 * ･ {@link centerPoint}
 * ･ {@link parent}
 * ･ {@link screenMode}
 * ･ {@link typename}
 * ･ {@link zoom}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Setting a view to full screen
 *     // Sets the screen mode of the current document to full screen
 *
 *     if (app.documents.length > 0) {
 *         app.documents[0].views[0].screenMode = ScreenMode.FULLSCREEN;
 *     }
 */
declare class View
{
	/**
	 * Read-only. The bounding rectangle of this view relative to the current document’s bounds.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link View}
	 * @since CS2
	 * @version CS2
	 */
	readonly bounds:Number[];

	/**
	 * The center point of this view relative to the current document’s bounds.
	 * @type {Number[]} array of 2 numbers
	 * @see {@link View}
	 * @since CS2
	 * @version CS2
	 */
	centerPoint:Number[];

	/**
	 * Read-only. The document that contains this view.
	 * @const
	 * @type {Document} {@link Document} object
	 * @see {@link View}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Document;

	/**
	 * The mode of display for this view.
	 * @type {ScreenMode}
	 * @see {@link View}
	 * @since CS2
	 * @version CS2
	 */
	screenMode:ScreenMode;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link View}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * The zoom factor of this view, where 100.0 is 100%.
	 * @type {Number} double
	 * @see {@link View}
	 * @since CS2
	 * @version CS2
	 */
	zoom:Number;
}