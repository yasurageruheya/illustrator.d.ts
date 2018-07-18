/**
 * The basic art item for displaying text. From the user interface, this is text created with the Text tool. There are three types of text art in Illustrator: point text, path text, and area text. The type is indicated by the text frame’s {@link kind} property.
 * When you create a text frame, you also create a {@link Story} object. However, threading text frames combines the frames into a single {@link Story} object. To thread frames, use the {@link nextFrame} or {@link previousFrame} property.
 *
 * @since CS5
 * @version CC
 *
 * <b>Properties</b>
 * ･ {@link anchor}
 * ･ {@link antialias}
 * ･ {@link characters}
 * ･ {@link columnCount}
 * ･ {@link columnGutter}
 * ･ {@link contents}
 * ･ {@link contentVariable}
 * ･ {@link endTValue}
 * ･ {@link flowLinksHorizontally}
 * ･ {@link insertionPoints}
 * ･ {@link kind}
 * ･ {@link lines}
 * ･ {@link matrix}
 * ･ {@link nextFrame}
 * ･ {@link opticalAlignment}
 * ･ {@link orientation}
 * ･ {@link paragraphs}
 * ･ {@link parent}
 * ･ {@link previousFrame}
 * ･ {@link rowCount}
 * ･ {@link rowGutter}
 * ･ {@link spacing}
 * ･ {@link startTValue}
 * ･ {@link story}
 * ･ {@link textPath}
 * ･ {@link textRange}
 * ･ {@link textRanges}
 * ･ {@link textSelection}
 * ･ {@link typename}
 * ･ {@link words}
 *
 * <b>Methods</b>
 * ･ {@link convertAreaObjectToPointObject}
 * ･ {@link convertPointObjectToAreaObject}
 * ･ {@link createOutline}
 * ･ {@link duplicate}
 * ･ {@link move}
 * ･ {@link remove}
 * ･ {@link resize}
 * ･ {@link rotate}
 * ･ {@link transform}
 * ･ {@link translate}
 * ･ {@link zOrder}
 *
 * @example
 * ➤ Rotate a text art item
 *     // Duplicates and rotates the selected text art item 5 times
 *
 *     if (app.documents.length > 0) {
 *         selectedItems = app.activeDocument.selection;
 *         // make sure something is selected.
 *         if (selectedItems.length > 0) {
 *             // The selection must be a text art item
 *             if (selectedItems[0].typename == "TextFrame") {
 *                 // Get the parent of the text art so new text art items
 *                 // can be inserted in the same group or layer
 *                 dupSrc = selectedItems[0];
 *                 textContainer = dupSrc.parent;
 *                 // Create 5 new versions of the text art each rotated a bit
 *                 for (i = 1; i <= 5; i++) {
 *                     dupText = dupSrc.duplicate(textContainer, ElementPlacement.PLACEATEND);
 *                     dupText.rotate(180 * i / 6);
 *                 }
 *             }
 *         }
 *     }
 */
declare class TextFrameItem extends PageItem
{
	/**
	 * The position of the {@link anchor} point, the start of the base line for point text.
	 * @type {Number[]} array of 2 numbers
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	anchor:Number[];

	/**
	 * The type of anti-aliasing to use in the text.
	 * @type {TextAntialias}
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	antialias:TextAntialias;

	/**
	 * Read-only. All the characters in this text frame.
	 * @const
	 * @type {Characters|TextRange[]} {@link Characters} collection object
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	readonly characters:Characters|TextRange[];

	/**
	 * The column count in the text frame (area text only).
	 * @type {Number} long
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	columnCount:Number;

	/**
	 * The column gutter in the text frame (area text only).
	 * @type {Number} double
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	columnGutter:Number;

	/**
	 * The text string.
	 * @type {String}
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	contents:String;

	/**
	 * The content variable bound to this text frame item.
	 * @type {Variable} {@link Variable} object
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	contentVariable:Variable;

	/**
	 * The end position of text along a path, as a value relative to the path’s segments (path text only).
	 * @type {Number} double
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	endTValue:Number;

	/**
	 * If <b>true</b>, flow text between linked frames horizontally first (area text only).
	 * @type {Boolean}
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	flowLinksHorizontally:Boolean;

	/**
	 * Read-only. All the insertion points in this text range.
	 * @const
	 * @type {InsertionPoints|InsertionPoint[]} {@link InsertionPoints} collection object
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	readonly insertionPoints:InsertionPoints|InsertionPoint[];

	/**
	 * Read-only. The type of a text frame item (area, path or point).
	 * @const
	 * @type {TextType}
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	kind:TextType;

	/**
	 * Read-only. All the lines in this text frame.
	 * @const
	 * @type {Lines|TextRange[]} {@link Lines} collection object
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	readonly lines:Lines;

	/**
	 * Read-only. The transformation matrix for this text frame.
	 * @const
	 * @type {Matrix} {@link Matrix} object
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	readonly matrix:Matrix;

	/**
	 * The linked text frame following this one.
	 * @type {TextFrameItem} {@link TextFrameItem} object
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	nextFrame:TextFrameItem;

	/**
	 * If <b>true</b>, the optical alignment feature is active.
	 * @type {Boolean}
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	opticalAlignment:Boolean;

	/**
	 * The orientation of the text.
	 * @type {TextOrientation}
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	orientation:TextOrientation;

	/**
	 * Read-only. All the paragraphs in this text frame.
	 * @const
	 * @type {Paragraphs|TextRange[]} {@link Paragraphs} collection object
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	readonly paragraphs:Paragraphs|TextRange[];

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Layer|GroupItem} {@link Layer} object or {@link GroupItem} object
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	readonly parent:Layer|GroupItem;

	/**
	 * The linked text frame preceding this one.
	 * @type {TextFrameItem} {@link TextFrameItem} object
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	previousFrame:TextFrameItem;

	/**
	 * The row count in the text frame (area text only).
	 * @type {Number} long
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	rowCount:Number;

	/**
	 * The row gutter in the text frame (area text only).
	 * @type {Number} double
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	rowGutter:Number;

	/**
	 * The amount of spacing.
	 * @type {Number} double
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	spacing:Number;

	/**
	 * The start position of text along a path, as a value relative to the path’s segments (path text only).
	 * @type {Number} double
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	startTValue:Number;

	/**
	 * Read-only. The story to which the text frame belongs.
	 * @const
	 * @type {Story} {@link Story} object
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	readonly story:Story;

	/**
	 * The path item associated with the text frame. <b>Note:</b> Valid only when {@link kind} is area or path.
	 * @type {TextPath} {@link TextPath} object
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	textPath:TextPath;

	/**
	 * Read-only. The text range of the text frame.
	 * @const
	 * @type {TextRange} {@link TextRange} object
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	readonly textRange:TextRange;

	/**
	 * Read-only. All the text in this text frame.
	 * @const
	 * @type {TextRanges|TextRange[]} {@link TextRanges} collection object
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	readonly textRanges:TextRanges|TextRange[];

	/**
	 * Read-only. The selected text range(s) in the text frame.
	 * @const
	 * @type {TextRange[]} array of {@link TextRange} objects
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	readonly textSelection:TextRange[];

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	readonly typename:String;

	/**
	 * Read-only. All the words in this text frame.
	 * @const
	 * @type {Words|TextRange[]} {@link Words} collection objects
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	readonly words:Words|TextRange[];

	/**
	 * Converts the area-type text frame to a point-type text frame.
	 * @return {TextFrameItem} {@link TextFrameItem} object
	 * @see {@link TextFrameItem}
	 * @since CC
	 * @version CC
	 */
	convertAreaObjectToPointObject():TextFrameItem;

	/**
	 * Converts the point-type text frame to an area-type text frame.
	 * @return {TextFrameItem} {@link TextFrameItem} object
	 * @see {@link TextFrameItem}
	 * @since CC
	 * @version CC
	 */
	convertPointObjectToAreaObject():TextFrameItem;

	/**
	 * Converts the text in the text frame to outlines.
	 * @return {GroupItem} {@link GroupItem} object
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	createOutline():GroupItem;

	/**
	 * Creates a {@link duplicate} of the selected object.
	 * @param {Object} [relativeObject] {@link Object}
	 * @param {ElementPlacement} [insertionLocation] {@link ElementPlacement}
	 * @return {TextRange} {@link TextRange} object
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	duplicate(relativeObject?:Object, insertionLocation?:ElementPlacement):TextRange;

	/**
	 * Moves the object.
	 * @param {Object} relativeObject {@link Object}
	 * @param {ElementPlacement} insertionLocation {@link ElementPlacement}
	 * @return {TextRange} {@link TextRange} object
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	move(relativeObject:Object, insertionLocation:ElementPlacement):TextRange;

	/**
	 * Deletes this object.
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	remove():void;

	/**
	 * Scales the art item where <b>scaleX</b> is the horizontal scaling factor and <b>scaleY</b> is the vertical scaling factor. <b>100.0 = 100%.</b>
	 * @param {Number} scaleX {@link Number} double
	 * @param {Number} scaleY {@link Number} double
	 * @param {Boolean} [changePositions] {@link Boolean}
	 * @param {Boolean} [changeFillPatterns] {@link Boolean}
	 * @param {Boolean} [changeFillGradients] {@link Boolean}
	 * @param {Boolean} [changeStrokePattern] {@link Boolean}
	 * @param {Number} [changeLineWidths] {@link Number} double
	 * @param {Transformation} [scaleAbout] {@link Transformation}
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	resize(scaleX:Number, scaleY:Number, changePositions?:Boolean, changeFillPatterns?:Boolean, changeFillGradients?:Boolean, changeStrokePattern?:Boolean, changeLineWidths?:Number, scaleAbout?:Transformation):void;

	/**
	 * Rotates the art item relative to the current rotation. The object is rotated counter-clockwise if the <b>angle</b> value is positive, clockwise if the value is negative.
	 * @param {Number} angle {@link Number} double
	 * @param {Boolean} [changePositions] {@link Boolean}
	 * @param {Boolean} [changeFillPatterns] {@link Boolean}
	 * @param {Boolean} [changeFillGradients] {@link Boolean}
	 * @param {Boolean} [changeStrokePattern] {@link Boolean}
	 * @param {Transformation} [scaleAbout] {@link Transformation}
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	rotate(angle:Number, changePositions?:Boolean, changeFillPatterns?:Boolean, changeFillGradients?:Boolean, changeStrokePattern?:Boolean, scaleAbout?:Transformation):void;

	/**
	 * Transforms the art item by applying a transformation matrix.
	 * @param {Matrix} transformationMatrix {@link Matrix} object
	 * @param {Boolean} [changePositions] {@link Boolean}
	 * @param {Boolean} [changeFillPatterns] {@link Boolean}
	 * @param {Boolean} [changeFillGradients] {@link Boolean}
	 * @param {Boolean} [changeStrokePattern] {@link Boolean}
	 * @param {Number} [changeLineWidths] {@link Number} double
	 * @param {Transformation} [scaleAbout] {@link Transformation}
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	transform(transformationMatrix:Matrix, changePositions?:Boolean, changeFillPatterns?:Boolean, changeFillGradients?:Boolean, changeStrokePattern?:Boolean, changeLineWidths?:Number, scaleAbout?:Transformation):void;

	/**
	 * Repositions the art item relative to the current position, where <b>deltaX</b> is the horizontal offset and <b>deltaY</b> is the vertical offset.
	 * @param {Number} [deltaX] {@link Number} double
	 * @param {Number} [deltaY] {@link Number} double
	 * @param {Boolean} [transformObjects] {@link Boolean}
	 * @param {Boolean} [transformFillPatterns] {@link Boolean}
	 * @param {Boolean} [transformFillGradients] {@link Boolean}
	 * @param {Boolean} [transformStrokePatterns] {@link Boolean}
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	translate(deltaX?:Number, deltaY?:Number, transformObjects?:Boolean, transformFillPatterns?:Boolean, transformFillGradients?:Boolean, transformStrokePatterns?:Boolean):void;

	/**
	 * Arranges the art item’s position in the stacking order of the group or layer({@link parent}) of this object.
	 * @param {ZOrderMethod} zOrderCmd {@link ZOrderMethod}
	 * @see {@link TextFrameItem}
	 * @since CS5
	 * @version CS5
	 */
	zOrder(zOrderCmd:ZOrderMethod):void;
}