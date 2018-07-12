/**
 * An {@link Artboard} object represents a single {@link Artboard} in a document. There can be between 1 to 100 artboards in one document.
 *
 * @since CS4
 * @version CS4
 *
 * <b>Properties</b>
 * ･ {@link artboardRect}
 * ･ {@link parent}
 * ･ {@link rulerPAR}
 * ･ {@link showCenter}
 * ･ {@link showCrossHairs}
 * ･ {@link showSafeAreas}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 */
declare class Artboard
{
	/**
	 * Size and position of the {@link Artboard}.
	 * @type {Number[]} Rect array of 4 {@link Number}
	 * @see {@link Artboard}
	 * @since CS4
	 * @version CS4
	 */
	artboardRect:Number[];

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Document} {@link Document} object
	 * @see {@link Artboard}
	 * @since CS4
	 * @version CS4
	 */
	readonly parent:Document;

	/**
	 * Pixel aspect ratio, used in ruler visualization if the units are pixels. Range: 0.1 to 10.0
	 * @type {Number} double
	 * @see {@link Artboard}
	 * @since CS4
	 * @version CS4
	 */
	rulerPAR:Number;

	/**
	 * Show center mark.
	 * @type {Boolean}
	 * @see {@link Artboard}
	 * @since CS4
	 * @version CS4
	 */
	showCenter:Boolean;

	/**
	 * Show cross hairs.
	 * @type {Boolean}
	 * @see {@link Artboard}
	 * @since CS4
	 * @version CS4
	 */
	showCrossHairs:Boolean;

	/**
	 * Show title and action safe areas (for video).
	 * @type {Boolean}
	 * @see {@link Artboard}
	 * @since CS4
	 * @version CS4
	 */
	showSafeAreas:Boolean;

	/**
	 * Read-only. The class name of this object.
	 * @const
	 * @type {String}
	 * @see {@link Artboard}
	 * @since CS4
	 * @version CS4
	 */
	typename:String;
}