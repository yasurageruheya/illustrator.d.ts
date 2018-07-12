/**
 * An {@link Artboard} object represents a single artboard in a document. There can be between <b>1 to 100</b> artboards in one document.
 *
 * @since CS4
 * @version CS5
 *
 * <b>Properties</b>
 * ･ {@link artboardRect}
 * ･ {@link name}
 * ･ {@link parent}
 * ･ {@link rulerOrigin}
 * ･ {@link rulerPAR}
 * ･ {@link showCenter}
 * ･ {@link showCrossHairs}
 * ･ {@link showSafeAreas}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 * ･ {@link remove}
 */
declare class Artboard
{
	/**
	 * Size and position of the artboard.
	 * @type {Number[]} Rect. array of 4 {@link Number}
	 * @see {@link Artboard}
	 * @since CS4
	 * @version CS4
	 */
	artboardRect:Number[];

	/**
	 * The unique identifying name of the artboard.
	 * @type {String}
	 * @see {@link Artboard}
	 * @since CS5
	 * @version CS5
	 */
	name:String;

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
	 * Ruler origin of the artboard, relative to the top left corner of the artboard.
	 * @type {Number[]} Point. array of 2 {@link Number}
	 * @see {@link Artboard}
	 * @since CS5
	 * @version CS5
	 */
	rulerOrigin:Number[];

	/**
	 * Pixel aspect ratio, used in ruler visualization if the units are pixels. Range: <b>0.1 to 10.0</b>
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

	/**
	 * Deletes this {@link Artboard} object. You cannot remove the last artboard in a document.
	 * @see {@link Artboard}
	 * @since CS5
	 * @version CS5
	 */
	remove():void;
}