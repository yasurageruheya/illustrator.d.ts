/**
 * A transformation matrix specification, used to transform the geometry of objects. Use it to specify and retrieve matrix information from an Illustrator document or from page items in a document.
 * Matrices are used in conjunction with the transform method and as a property of a number of objects. A matrix specifies how to transform the geometry of an object. You can generate an original matrix using the {@link Application} object methods {@link Application#getTranslationMatrix}, {@link Application#getScaleMatrix}, or {@link Application#getRotationMatrix}.
 * A {@link Matrix} is a record containing the matrix values, not a reference to a {@link Matrix} object. The matrix commands operate on the values of a matrix record. If a command modifies a matrix, a modified matrix record is returned as the result of the command. The original matrix record passed to the command is not modified.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link mValueA}
 * ･ {@link mValueB}
 * ･ {@link mValueC}
 * ･ {@link mValueD}
 * ･ {@link mValueTX}
 * ･ {@link mValueTY}
 * ･ {@link typename}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Combining matrices to apply multiple transformations
 *     To apply multiple transformations to objects, it is more efficient to use the matrix suite than to apply the
 *     transformations one at a time. The following script demonstrates how to combine multiple matrices.
 *       // Tranforms all art in a document using translation and rotation matrices,
 *       // moves art half an inch to the right and 1.5 inches up on the page
 *
 *       if (app.documents.length > 0) {
 *           var moveMatrix = app.getTranslationMatrix(0.5, 1.5);
 *           // Add a rotation to the translation, 10 degrees counter clockwise
 *           var totalMatrix = concatenateRotationMatrix(moveMatrix, 10);
 *           // apply the transformation to all art in the document
 *           var doc = app.activeDocument;
 *           for (i = 0; i < doc.pageItems.length; i++) {
 *               doc.pageItems[i].transform(totalMatrix);
 *           }
 *       }
 */
declare class Matrix
{
	/**
	 * {@link Matrix} property <b>a</b>.
	 * @type {Number} double
	 * @see {@link Matrix}
	 * @since CS2
	 * @version CS2
	 */
	mValueA:Number;

	/**
	 * {@link Matrix} property <b>b</b>.
	 * @type {Number} double
	 * @see {@link Matrix}
	 * @since CS2
	 * @version CS2
	 */
	mValueB:Number;

	/**
	 * {@link Matrix} property <b>c</b>.
	 * @type {Number} double
	 * @see {@link Matrix}
	 * @since CS2
	 * @version CS2
	 */
	mValueC:Number;

	/**
	 * {@link Matrix} property <b>d</b>.
	 * @type {Number} double
	 * @see {@link Matrix}
	 * @since CS2
	 * @version CS2
	 */
	mValueD:Number;

	/**
	 * {@link Matrix} property <b>tx</b>.
	 * @type {Number} double
	 * @see {@link Matrix}
	 * @since CS2
	 * @version CS2
	 */
	mValueTX:Number;

	/**
	 * {@link Matrix} property <b>ty</b>.
	 * @type {Number} double
	 * @see {@link Matrix}
	 * @since CS2
	 * @version CS2
	 */
	mValueTY:Number;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link Matrix}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;
}