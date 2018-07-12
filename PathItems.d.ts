/**
 * A collection of {@link PathItem} objects. The methods {@link PathItems#ellipse}, {@link PathItems#polygon}, {@link PathItems#rectangle}, {@link PathItems#roundedRectangle}, and {@link PathItems#star} allow you to create complex path items using straightforward parameters. If you do not provide any parameters when calling these methods, default values are used.
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
 * ･ {@link ellipse}
 * ･ {@link getByName}
 * ･ {@link index}
 * ･ {@link polygon}
 * ･ {@link rectangle}
 * ･ {@link removeAll}
 * ･ {@link roundedRectangle}
 * ･ {@link star}
 *
 * @example
 * ➤ Creating a rectangular path item
 *    This script illustrates how to create a new rectangle in the first layer of the frontmost document.
 *      // Create a basic shape in layer 1 of document 1
 *      // and apply a random graphic style to it
 *
 *      var doc = app.documents.add();
 *      var artLayer = doc.layers[0];
 *      app.defaultStroked = true;
 *      app.defaultFilled = true;
 *
 *      var rect = artLayer.pathItems.rectangle(762.5, 87.5, 425.0, 75.0);
 *      var rndRect = artLayer.pathItems.roundedRectangle(637.5, 87.5, 425.0, 75.0, 20.0, 10.0);
 *      // Create ellipse, 'reversed' is false, 'inscribed' is true
 *      var ellipse = artLayer.pathItems.ellipse(512.5, 87.5, 425.0, 75.0, false, true);
 *      // Create octagon, and 8-sided polygon
 *      var octagon = artLayer.pathItems.polygon(300.0, 325.0, 75.0, 8);
 *      // Create a 4 pointed star
 *      var star = artLayer.pathItems.star(300.0, 125.0, 100.0, 20.0, 4);
 *
 *      for (i = 0; i < artLayer.pathItems.length; i++) {
 *          styleIndex = Math.round(Math.random() * (doc.graphicStyles.length - 1));
 *          doc.graphicStyles[styleIndex].applyTo(artLayer.pathItems[i]);
 *      }
 */
declare class PathItems
{
	/**
	 * Read-only. The number of objects in the collection.
	 * @const
	 * @type {Number}
	 * @see {@link PathItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly length:Number;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Object}
	 * @see {@link PathItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link PathItems}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * Creates a new object.
	 * @return {PathItem} {@link PathItem} object
	 * @see {@link PathItems}
	 * @since CS2
	 * @version CS2
	 */
	add():PathItem;

	/**
	 * Creates a new pathItem in the shape of an ellipse using the supplied parameters.
	 * @param {Number} [top] {@link Number} double
	 * @param {Number} [left] {@link Number} double
	 * @param {Number} [width] {@link Number} double
	 * @param {Number} [height] {@link Number} double
	 * @param {Boolean} [reversed] {@link Boolean}
	 * @param {Boolean} [inscribed] {@link Boolean}
	 * @return {PathItem} {@link PathItem} object
	 * @see {@link PathItems}
	 * @since CS2
	 * @version CS2
	 */
	ellipse(top?:Number, left?:Number, width?:Number, height?:Number, reversed?:Boolean, inscribed?:Boolean):PathItem;

	/**
	 * Gets the first element in the collection with the specified name.
	 * @param {String} name {@link String}
	 * @return {PathItem} {@link PathItem} object
	 * @see {@link PathItems}
	 * @since CS2
	 * @version CS2
	 */
	getByName(name:String):PathItem;

	/**
	 * Gets an element from the collection.
	 * @param {String | Number} itemKey
	 * @return {PathItem} {@link PathItem} object
	 * @see {@link PathItems}
	 * @since CS2
	 * @version CS2
	 */
	index(itemKey:String|Number):PathItem;

	/**
	 * Creates a new pathItem in the shape of an polygon using the supplied parameters.
	 * @param {Number} [centerX] {@link Number} double
	 * @param {Number} [centerY] {@link Number} double
	 * @param {Number} [radius] {@link Number} double
	 * @param {Number} [sides] {@link Number} double
	 * @param {Boolean} [reversed] {@link Boolean}
	 * @return {PathItem} {@link PathItem} object
	 * @see {@link PathItems}
	 * @since CS2
	 * @version CS2
	 */
	polygon(centerX?:Number, centerY?:Number, radius?:Number, sides?:Number, reversed?:Boolean):PathItem;

	/**
	 * Creates a new pathItem in the shape of an polygon using the supplied parameters.
	 * @param {Number} top {@link Number} double
	 * @param {Number} left {@link Number} double
	 * @param {Number} width {@link Number} double
	 * @param {Number} height {@link Number} double
	 * @param {Boolean} [reversed] {@link Boolean}
	 * @return {PathItem} {@link PathItem} object
	 * @see {@link PathItems}
	 * @since CS2
	 * @version CS2
	 */
	rectangle(top:Number, left:Number, width:Number, height:Number, reversed:Boolean):PathItem;

	/**
	 * Deletes all elements in this collection.
	 * @see {@link PathItems}
	 * @since CS2
	 * @version CS2
	 */
	removeAll():void;

	/**
	 * Creates a new pathItem in the shape of a rectangle with rounded corners using the supplied parameters.
	 * @param {Number} top {@link Number} double
	 * @param {Number} left {@link Number} double
	 * @param {Number} width {@link Number} double
	 * @param {Number} height {@link Number} double
	 * @param {Number} [horizontalRadius] {@link Number} double
	 * @param {Number} [verticalRadius] {@link Number} double
	 * @param {Boolean} [reversed] {@link Boolean}
	 * @return {PathItem} {@link PathItem} object
	 * @see {@link PathItems}
	 * @since CS2
	 * @version CS2
	 */
	roundedRectangle(top:Number, left:Number, width:Number, height:Number, horizontalRadius?:Number, verticalRadius?:Number, reversed?:Boolean):PathItem;

	/**
	 * Creates a new path item in the shape of a star using the supplied parameters.
	 * @param {Number} [centerX] {@link Number} double
	 * @param {Number} [centerY] {@link Number} double
	 * @param {Number} [radius] {@link Number} double
	 * @param {Number} [innerRadius] {@link Number} double
	 * @param {Number} [points] {@link Number} long
	 * @param {Boolean} [reversed] {@link Boolean}
	 * @return {PathItem} {@link PathItem} object
	 * @see {@link PathItems}
	 * @since CS2
	 * @version CS2
	 */
	star(centerX?:Number, centerY?:Number, radius?:Number, innerRadius?:Number, points?:Number, reversed?:Boolean):PathItem;
}