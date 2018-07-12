/**
 * Associates file information with a PostScript Printer Description (PPD) file.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link name}
 * ･ {@link PPDInfo}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 */
declare class PPDFile
{
	/**
	 * The PPD model name.
	 * @type {String}
	 * @see {@link PPDFile}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * The PPD file information.
	 * @type {PPDFileInfo} {@link PPDFileInfo} object
	 * @see {@link PPDFile}
	 * @since CS3
	 * @version CS3
	 */
	PPDInfo:PPDFileInfo;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link PPDFile}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}