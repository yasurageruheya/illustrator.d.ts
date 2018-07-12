/**
 * The basic art item for displaying text. From the user interface, this is text created with the Text tool. There are three types of text art in Illustrator: point text, path text, and area text. The type is indicated by the text frame’s {@link TextFrame#kind} property.
 * When you create a text frame, you also create a {@link Story} object. However, threading text frames combines the frames into a single story object. To thread frames, use the {@link TextFrame#nextFrame} or {@link TextFrame#previousFrame} property.
 *
 * @since CS2
 * @version CS3
 *
 * <b>Properties</b>
 * ･ {@link anchor}
 * ･ {@link artworkKnockout}
 * ･ {@link blendingMode}
 * ･ {@link characters}
 * ･ {@link columnCount}
 * ･ {@link columnGutter}
 * ･ {@link contents}
 * ･ {@link contentVariable}
 * ･ {@link controlBounds}
 * ･ {@link editable}
 * ･ {@link endTValue}
 * ･ {@link flowLinksHorizontally}
 * ･ {@link geometricBounds}
 * ･ {@link height}
 * ･ {@link hidden}
 * ･ {@link insertionPoints}
 * ･ {@link isIsolated}
 * ･ {@link kind}
 * ･ {@link layer}
 * ･ {@link left}
 * ･ {@link lines}
 * ･ {@link locked}
 * ･ {@link matrix}
 * ･ {@link name}
 * ･ {@link nextFrame}
 * ･ {@link note}
 * ･ {@link opacity}
 * ･ {@link opticalAlignment}
 * ･ {@link orientation}
 * ･ {@link paragraphs}
 * ･ {@link parent}
 * ･ {@link position}
 * ･ {@link previousFrame}
 * ･ {@link rowCount}
 * ･ {@link rowGutter}
 * ･ {@link selected}
 * ･ {@link sliced}
 * ･ {@link spacing}
 * ･ {@link startTValue}
 * ･ {@link story}
 * ･ {@link tags}
 * ･ {@link textPath}
 * ･ {@link textRange}
 * ･ {@link textRanges}
 * ･ {@link textSelection}
 * ･ {@link top}
 * ･ {@link typename}
 * ･ {@link uRL}
 * ･ {@link visibilityVariable}
 * ･ {@link visibleBounds}
 * ･ {@link width}
 * ･ {@link words}
 * ･ {@link wrapInside}
 * ･ {@link wrapOffset}
 * ･ {@link wrapped}
 * ･ {@link zOrderPosition}
 * ･ {@link words}
 *
 * <b>Methods</b>
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
declare class TextFrame extends PageItem
{
	/**
	 * The position of the anchor point, the start of the base line for point text.
	 * @type {Number[]} array of 2 numbers
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	anchor:Number[];

	/**
	 * Is this object used to create a knockout, and if so, what kind of knockout.
	 * @type {KnockoutState}
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	artworkKnockout:KnockoutState;

	/**
	 * The blend mode used when compositing an object.
	 * @type {BlendModes}
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	blendingMode:BlendModes;

	/**
	 * Read-only. All the characters in this text frame.
	 * @const
	 * @type {Characters} {@link Characters} collection object
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	readonly characters:Characters;

	/**
	 * The column count in the text frame (area text only).
	 * @type {Number} long
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	columnCount:Number;

	/**
	 * The column gutter in the text frame (area text only).
	 * @type {Number} double
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	columnGutter:Number;

	/**
	 * The text string.
	 * @type {String}
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	contents:String;

	/**
	 * The content variable bound to this text frame item.
	 * @type {Variable} {@link Variable} object
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	contentVariable:Variable;

	/**
	 * Read-only. The bounds of the object including stroke width and controls.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	readonly controlBounds:Number[];

	/**
	 * Read-only. If <b>true</b>, this item is editable.
	 * @const
	 * @type {Boolean}
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	readonly editable:Boolean;

	/**
	 * The end position of text along a path, as a value relative to the path’s segments (path text only).
	 * @type {Number} double
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	endTValue:Number;

	/**
	 * If <b>true</b>, flow text between linked frames horizontally first (area text only).
	 * @type {Boolean}
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	flowLinksHorizontally:Boolean;

	/**
	 * Read-only. The bounds of the object excluding stroke width.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	readonly geometricBounds:Number[];

	/**
	 * The height of the group item.
	 * @type {Number} double
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	height:Number;

	/**
	 * If <b>true</b>, this item is hidden.
	 * @type {Boolean}
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	hidden:Boolean;

	/**
	 * Read-only. All the insertion points in this text range.
	 * @const
	 * @type {InsertionPoints} {@link InsertionPoints} collection object
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	readonly insertionPoints:InsertionPoints;

	/**
	 * If <b>true</b>, the artwork is isolated.
	 * @const
	 * @type {Boolean}
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	isIsolated:Boolean;

	/**
	 * Read-only. The type of a text frame item (area, path or point).
	 * @const
	 * @type {TextType}
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	kind:TextType;

	/**
	 * Read-only. The layer to which this item belongs.
	 * @type {Layer} {@link Layer} object
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	readonly layer:Layer;

	/**
	 * The position of the left side of the item (in points, measured from the left side of the page).
	 * @const
	 * @type {Number}
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	left:Number;

	/**
	 * Read-only. All the lines in this text frame.
	 * @const
	 * @type {Lines} {@link Lines} collection object
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	readonly lines:Lines;

	/**
	 * If <b>true</b>, this item is locked.
	 * @type {Boolean}
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	locked:Boolean;

	/**
	 * Read-only. The transformation matrix for this text frame.
	 * @const
	 * @type {Matrix} {@link Matrix} object
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	readonly matrix:Matrix;

	/**
	 * The name of this item.
	 * @type {String}
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	name:String;

	/**
	 * The linked text frame following this one.
	 * @type {TextFrame} {@link TextFrame} object
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	nextFrame:TextFrame;

	/**
	 * The note assigned to this item.
	 * @type {String}
	 * @see {@link TextFrame}
	 * @since CS3
	 * @version CS3
	 */
	note:String;

	/**
	 * The opacity of the object. Range: 0.0 to 100.0
	 * @type {Number} double
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	opacity:Number;

	/**
	 * If <b>true</b>, the optical alignment feature is active.
	 * @type {Boolean}
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	opticalAlignment:Boolean;

	/**
	 * The orientation of the text.
	 * @type {TextOrientation}
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	orientation:TextOrientation;

	/**
	 * Read-only. All the paragraphs in this text frame.
	 * @const
	 * @type {Paragraphs} {@link Paragraphs} collection object
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	readonly paragraphs:Paragraphs;

	/**
	 * Read-only. The parent of this object.
	 * @const
	 * @type {Layer|GroupItem} {@link Layer} object or {@link GroupItem} object
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Layer|GroupItem;

	/**
	 * The position (in points) of the top left corner of the {@link TextFrame} object in the format [x, y]. Does not include stroke weight.
	 * @type {Number[]} array of 2 numbers
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	position:Number[];

	/**
	 * The linked text frame preceding this one.
	 * @type {TextFrame} {@link TextFrame} object
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	previousFrame:TextFrame;

	/**
	 * The row count in the text frame (area text only).
	 * @type {Number} long
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	rowCount:Number;

	/**
	 * The row gutter in the text frame (area text only).
	 * @type {Number} double
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	rowGutter:Number;

	/**
	 * If <b>true</b>, this item is selected.
	 * @type {Boolean}
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	selected:Boolean;

	/**
	 * If <b>true</b>, the item sliced. Default: <b>false</b>
	 * @type {Boolean}
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	sliced:Boolean;

	/**
	 * The amount of spacing.
	 * @type {Number} double
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	spacing:Number;

	/**
	 * The start position of text along a path, as a value relative to the path’s segments (path text only).
	 * @type {Number} double
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	startTValue:Number;

	/**
	 * Read-only. The story to which the text frame belongs.
	 * @const
	 * @type {Story} {@link Story} object
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	readonly story:Story;

	/**
	 * Read-only. The tags contained in this item.
	 * @const
	 * @type {Tags} {@link Tags} collection object
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	readonly tags:Tags;

	/**
	 * The path item associated with the text frame. Note: Valid only when {@link TextFrame#kind} is area or path.
	 * @type {TextPath} {@link TextPath} object
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	textPath:TextPath;

	/**
	 * Read-only. The text range of the text frame.
	 * @const
	 * @type {TextRange} {@link TextRange} object
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	readonly textRange:TextRange;

	/**
	 * Read-only. All the text in this text frame.
	 * @const
	 * @type {TextRanges} {@link TextRanges} collection object
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	readonly textRanges:TextRanges;

	/**
	 * Read-only. The selected text range(s) in the text frame.
	 * @const
	 * @type {TextRange[]} array of {@link TextRange} objects
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	readonly textSelection:TextRange[];

	/**
	 * The position of the top of the item (in points, measured from the bottom of the page).
	 * @type {Number} double
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	top:Number;

	/**
	 * Read-only. The class name of the referenced object.
	 * @const
	 * @type {String}
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * The value of the Adobe URL tag assigned to this item.
	 * @type {String}
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	uRL:String;

	/**
	 * The visibility variable bound to the item.
	 * @type {Variable} {@link Variable} object
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	visibilityVariable:Variable;

	/**
	 * Read-only. The visible bounds of the item including stroke width.
	 * @const
	 * @type {Number[]} array of 4 numbers
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	readonly visibleBounds:Number[];

	/**
	 * The width of the item.
	 * @type {Number} double
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	width:Number;

	/**
	 * Read-only. All the words in this text frame.
	 * @const
	 * @type {Words} {@link Words} collection objects
	 * @see {@link TextFrame}
	 * @since CS3
	 * @version CS3
	 */
	readonly words:Words;

	/**
	 * If <b>true</b>, the text frame object should be wrapped inside this object.
	 * @const
	 * @type {Boolean}
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	wrapInside:Boolean;

	/**
	 * The offset to use when wrapping text around this object.
	 * @type {Number} double
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	wrapOffset:Number;

	/**
	 * If <b>true</b>, wrap text frame objects around this object (text frame must be above the object).
	 * @const
	 * @type {Boolean}
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	wrapped:Boolean;

	/**
	 * Read-only. The position of this item within the stacking order of the group or layer  ({@link parent})  that contains the item.
	 * @const
	 * @type {Number}
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	readonly zOrderPosition:Number;

	/**
	 * Converts the text in the text frame to outlines.
	 * @return {GroupItem} {@link GroupItem} object
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	createOutline():GroupItem;

	/**
	 * Creates a duplicate of the selected object.
	 * @param {Object} [relativeObject] {@link Object}
	 * @param {ElementPlacement} [insertionLocation] {@link ElementPlacement}
	 * @return {TextRange} {@link TextRange} object
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	duplicate(relativeObject?:Object, insertionLocation?:ElementPlacement):TextRange;

	/**
	 * Moves the object.
	 * @param {Object} relativeObject {@link Object}
	 * @param {ElementPlacement} insertionLocation {@link ElementPlacement}
	 * @return {TextRange} {@link TextRange} object
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	move(relativeObject:Object, insertionLocation:ElementPlacement):TextRange;

	/**
	 * Deletes this object.
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	remove():void;

	/**
	 * Scales the art item where <b>scaleX</b> is the horizontal scaling factor and <b>scaleY</b> is the vertical scaling factor. 100.0 = 100%.
	 * @param {Number} scaleX {@link Number} double
	 * @param {Number} scaleY {@link Number} double
	 * @param {Boolean} [changePositions] {@link Boolean}
	 * @param {Boolean} [changeFillPatterns] {@link Boolean}
	 * @param {Boolean} [changeFillGradients] {@link Boolean}
	 * @param {Boolean} [changeStrokePattern] {@link Boolean}
	 * @param {Number} [changeLineWidths] {@link Number} double
	 * @param {Transformation} [scaleAbout] {@link Transformation}
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
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
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
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
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
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
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	translate(deltaX?:Number, deltaY?:Number, transformObjects?:Boolean, transformFillPatterns?:Boolean, transformFillGradients?:Boolean, transformStrokePatterns?:Boolean):void;

	/**
	 * Arranges the art item’s position in the stacking order of the group or layer  ({@link parent})  of this object.
	 * @param {ZOrderMethod} zOrderCmd {@link ZOrderMethod}
	 * @see {@link TextFrame}
	 * @since CS2
	 * @version CS2
	 */
	zOrder(zOrderCmd:ZOrderMethod):void;
}