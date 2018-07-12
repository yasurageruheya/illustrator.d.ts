/**
 * Specifies the preferred options for AutoCAD, FreeHand, PDF, and Photoshop files.
 *
 * @since CS2
 * @version CS5
 *
 * <b>Properties</b>
 * ･ {@link AutoCADFileOptions}
 * ･ {@link FreeHandFileOptions}
 * ･ {@link parent}
 * ･ {@link PDFFileOptions}
 * ･ {@link PhotoshopFileOptions}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 * ･ {@link getBooleanPreference}
 * ･ {@link getIntegerPreference}
 * ･ {@link getRealPreference}
 * ･ {@link getStringPreference}
 * ･ {@link removePreference}
 * ･ {@link setBooleanPreference}
 * ･ {@link setIntegerPreference}
 * ･ {@link setRealPreference}
 * ･ {@link setStringPreference}
 */
declare class Preferences
{
	/**
	 * Read-only. Options to use when opening or placing an AutoCAD file.
	 * @const
	 * @type {OpenOptionsAutoCAD} {@link OpenOptionsAutoCAD} object
	 * @see {@link Preferences}
	 * @since CS3
	 * @version CS3
	 */
	readonly AutoCADFileOptions:OpenOptionsAutoCAD;

	/**
	 * Read-only. Options to use when opening or placing a FreeHand file.
	 * @const
	 * @type {OpenOptionsFreeHand} {@link FreeHandFileOptions} object
	 * @see {@link Preferences}
	 * @since CS3
	 * @version CS5
	 */
	readonly FreeHandFileOptions:OpenOptionsFreeHand;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link Preferences}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. Options to use when opening or placing a PDF file.
	 * @const
	 * @type {PDFFileOptions} {@link PDFFileOptions} object
	 * @see {@link Preferences}
	 * @since CS2
	 * @version CS2
	 */
	readonly PDFFileOptions:PDFFileOptions;

	/**
	 * Read-only. Options to use when opening or placing a Photoshop file.
	 * @const
	 * @type {PhotoshopFileOptions} {@link PhotoshopFileOptions} object
	 * @see {@link Preferences}
	 * @since CS4
	 * @version CS4
	 */
	readonly PhotoshopFileOptions:PhotoshopFileOptions;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Preferences}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Gets the boolean value of a given application preference.
	 * @param {String} key {@link String}
	 * @return {Boolean} {@link Boolean}
	 * @see {@link Preferences}
	 * @since CS3
	 * @version CS3
	 */
	getBooleanPreference(key:String):Boolean;

	/**
	 * Gets the integer value of a given application preference.
	 * @param {String} key {@link String}
	 * @return {Number} {@link Number} integer
	 * @see {@link Preferences}
	 * @since CS3
	 * @version CS3
	 */
	getIntegerPreference(key:String):Number;

	/**
	 * Gets the real-number value of a given application preference.
	 * @param {String} key {@link String}
	 * @return {Number} {@link Number} double
	 * @see {@link Preferences}
	 * @since CS3
	 * @version CS3
	 */
	getRealPreference(key:String):Number;

	/**
	 * Gets the string value of a given application preference.
	 * @param {String} key {@link String}
	 * @return {String} {@link String}
	 * @see {@link Preferences}
	 * @since CS3
	 * @version CS3
	 */
	getStringPreference(key:String):String;

	/**
	 * Deletes a given application preference.
	 * @param {String} key {@link String}
	 * @see {@link Preferences}
	 * @since CS3
	 * @version CS3
	 */
	removePreference(key:String):void;

	/**
	 * Sets the boolean value of a given application preference.
	 * @param {String} key {@link String}
	 * @param {Boolean} value {@link Boolean}
	 * @see {@link Preferences}
	 * @since CS3
	 * @version CS3
	 */
	setBooleanPreference(key:String, value:Boolean):void;

	/**
	 * Sets the integer value of a given application preference.
	 * @param {String} key {@link String}
	 * @param {Number} value {@link Number} integer
	 * @see {@link Preferences}
	 * @since CS3
	 * @version CS3
	 */
	setIntegerPreference(key:String, value:Number):void;

	/**
	 * Sets the real-number value of a given application preference.
	 * @param {String} key {@link String}
	 * @param {Number} value {@link Number} double
	 * @see {@link Preferences}
	 * @since CS3
	 * @version CS3
	 */
	setRealPreference(key:String, value:Number):void;

	/**
	 * Sets the string value of a given application preference.
	 * @param {String} key {@link String}
	 * @param {String} value {@link String}
	 * @see {@link Preferences}
	 * @since CS3
	 * @version CS3
	 */
	setStringPreference(key:String, value:String):void;
}