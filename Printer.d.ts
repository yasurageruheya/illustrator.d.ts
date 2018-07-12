/**
 * Associates an available printer with printer information. To request a list of printers, you must first have a document open or an error is returned.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link name}
 * ･ {@link printerInfo}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 */
declare class Printer
{
	/**
	 * The printer name.
	 * @type {String}
	 * @see {@link Printer}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * The printer information.
	 * @type {PrinterInfo} {@link PrinterInfo} object
	 * @see {@link Printer}
	 * @since CS2
	 * @version CS2
	 */
	printerInfo:PrinterInfo;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link Printer}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}