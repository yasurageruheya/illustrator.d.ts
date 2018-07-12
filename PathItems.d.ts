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
 * ➤ Creating shapes
 *     // Creates 5 shapes in layer 1 of document 1
 *     // and applies a random graphic style to each
 *
 *     var doc = app.documents.add();
 *     var artLayer = doc.layers[0];
 *     app.defaultStroked = true;
 *     app.defaultFilled = true;
 *
 *     var rect = artLayer.pathItems.rectangle(762.5, 87.5, 425.0, 75.0);
 *     var rndRect = artLayer.pathItems.roundedRectangle(637.5, 87.5, 425.0, 75.0, 20.0, 10.0);
 *     // Create ellipse, 'reversed' is false, 'inscribed' is true
 *     var ellipse = artLayer.pathItems.ellipse(512.5, 87.5, 425.0, 75.0, false, true);
 *     // Create octagon, and 8-sided polygon
 *     var octagon = artLayer.pathItems.polygon(300.0, 325.0, 75.0, 8);
 *     // Create a 4 pointed star
 *     var star = artLayer.pathItems.star(300.0, 125.0, 100.0, 20.0, 4);
 *
 *     for (i = 0; i < artLayer.pathItems.length; i++) {
 *         styleIndex = Math.round(Math.random() * (doc.graphicStyles.length - 1));
 *         doc.graphicStyles[styleIndex].applyTo(artLayer.pathItems[i]);
 *     }
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
	 * Creates a new {@link PathItem} in the shape of an ellipse using the supplied parameters. Defaults: top: 100 pt. ; left: 100 pt. ; width: 50 pt. ; height: 100 pt. ; reversed: <b>false</b>
	 * @param {Number} [top=100] {@link Number} double
	 * @param {Number} [left=100] {@link Number} double
	 * @param {Number} [width=50] {@link Number} double
	 * @param {Number} [height=100] {@link Number} double
	 * @param {Boolean} [reversed=false] {@link Boolean}
	 * @param {Boolean} [inscribed] {@link Boolean}
	 * @return {PathItem} {@link PathItem} object
	 * @see {@link PathItems}
	 * @since CS2
	 * @version CS2
	 */
	ellipse(top:Number=100, left:Number=100, width:Number=50, height:Number=100, reversed:Boolean=false, inscribed?:Boolean):PathItem;

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
	index(itemKey:String | Number):PathItem;

	/**
	 * Creates a new {@link PathItem} in the shape of an polygon using the supplied parameters. Defaults: centerX: 200 pt. ; centerY: 300 pt. ; radius: 50 pt. ; sides: 8; reversed: <b>false</b>
	 * @param {Number} [centerX=200] {@link Number} double
	 * @param {Number} [centerY=300] {@link Number} double
	 * @param {Number} [radius=50] {@link Number} double
	 * @param {Number} [sides=8] {@link Number} double
	 * @param {Boolean} [reversed=false] {@link Boolean}
	 * @return {PathItem} {@link PathItem} object
	 * @see {@link PathItems}
	 * @since CS2
	 * @version CS2
	 */
	polygon(centerX:Number=200, centerY:Number=300, radius:Number=50, sides:Number=8, reversed:Boolean=false):PathItem;

	/**
	 * Creates a new {@link PathItem} in the shape of an polygon using the supplied parameters.
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
	 * Creates a new {@link PathItem} in the shape of a rectangle with rounded corners using the supplied parameters. Defaults: horizontalRadius: 15 pt. ; verticalRadius: 20 pt. ; reversed: <b>false</b>
	 * @param {Number} top {@link Number} double
	 * @param {Number} left {@link Number} double
	 * @param {Number} width {@link Number} double
	 * @param {Number} height {@link Number} double
	 * @param {Number} [horizontalRadius=15] {@link Number} double
	 * @param {Number} [verticalRadius=20] {@link Number} double
	 * @param {Boolean} [reversed=false] {@link Boolean}
	 * @return {PathItem} {@link PathItem} object
	 * @see {@link PathItems}
	 * @since CS2
	 * @version CS2
	 */
	roundedRectangle(top:Number, left:Number, width:Number, height:Number, horizontalRadius:Number=15, verticalRadius:Number=20, reversed:Boolean=false):PathItem;

	/**
	 * Creates a new path item in the shape of a star using the supplied parameters. Defaults: centerX: 200 pt. ; centerY: 300 pt. ; radius: 50 pt. ; innerRadius: 20 pt. ; points: 5; reversed: <b>false</b>
	 * @param {Number} [centerX=200] {@link Number} double
	 * @param {Number} [centerY=300] {@link Number} double
	 * @param {Number} [radius=50] {@link Number} double
	 * @param {Number} [innerRadius=20] {@link Number} double
	 * @param {Number} [points=5] {@link Number} long
	 * @param {Boolean} [reversed=false] {@link Boolean}
	 * @return {PathItem} {@link PathItem} object
	 * @see {@link PathItems}
	 * @since CS2
	 * @version CS2
	 */
	star(centerX?:Number=200, centerY?:Number=300, radius?:Number=50, innerRadius?:Number=20, points?:Number=5, reversed?:Boolean=false):PathItem;
}