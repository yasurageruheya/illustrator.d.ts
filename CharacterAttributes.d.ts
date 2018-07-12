/**
 * Specifies the properties of a character contained in a text frame. A {@link CharacterStyle} object associates these attributes with a specific text range through its {@link CharacterAttributes} property.
 * <b>Note:</b> Character attributes do not have default values, and are undefined until explicitly set.
 *
 * @since CS2
 * @version CS2
 *
 * <b>Properties</b>
 * ･ {@link akiLeft}
 * ･ {@link akiRight}
 * ･ {@link alignment}
 * ･ {@link alternateGlyphs}
 * ･ {@link autoLeading}
 * ･ {@link baselineDirection}
 * ･ {@link baselinePosition}
 * ･ {@link baselineShift}
 * ･ {@link capitalization}
 * ･ {@link connectionForms}
 * ･ {@link contextualLigature}
 * ･ {@link discretionaryLigature}
 * ･ {@link figureStyle}
 * ･ {@link fillColor}
 * ･ {@link fractions}
 * ･ {@link horizontalScale}
 * ･ {@link italics}
 * ･ {@link kerningMethod}
 * ･ {@link language}
 * ･ {@link leading}
 * ･ {@link ligature}
 * ･ {@link noBreak}
 * ･ {@link openTypePosition}
 * ･ {@link ordinals}
 * ･ {@link ornaments}
 * ･ {@link overprintFill}
 * ･ {@link overprintStroke}
 * ･ {@link parent}
 * ･ {@link proportionalMetrics}
 * ･ {@link rotation}
 * ･ {@link size}
 * ･ {@link strikeThrough}
 * ･ {@link strokeColor}
 * ･ {@link strokeWeight}
 * ･ {@link stylisticAlternates}
 * ･ {@link swash}
 * ･ {@link tateChuYokoHorizontal}
 * ･ {@link tateChuYokoVertical}
 * ･ {@link textFont}
 * ･ {@link titling}
 * ･ {@link tracking}
 * ･ {@link Tsume}
 * ･ {@link typename}
 * ･ {@link underline}
 * ･ {@link verticalScale}
 * ･ {@link wariChuCharactersAfterBreak}
 * ･ {@link wariChuCharactersBeforeBreak}
 * ･ {@link wariChuEnabled}
 * ･ {@link wariChuJustification}
 * ･ {@link wariChuLineGap}
 * ･ {@link wariChuLines}
 * ･ {@link wariChuScale}
 *
 * <b>Methods</b>
 *
 * @example
 * ➤ Setting character attributes
 *     // Character Attributes
 *     // Create a new document add a simple text item
 *
 *     var docRef = documents.add();
 *     var textRef = docRef.textFrames.add();
 *     textRef.contents = "I Love Scripting!";
 *     textRef.top = 400;
 *     textRef.left = 100;
 *
 *     // incrementally increase the size of each character
 *     var charCount = textRef.textRange.characters.length;
 *     var size = 100;
 *     for (i = 0; i < charCount; i++, size *= 1.2) {
 *         textRef.textRange.characters[i].characterAttributes.horizontalScale = size;
 *         textRef.textRange.characters[i].characterAttributes.verticalScale = size;
 *     }
 */
declare class CharacterAttributes
{
	/**
	 * The amount of inter-character spacing to be added to the left side of the character,
	 * in thousandths of an em (that amount will not compress or expand during full-justification).
	 * @type {Number} double
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	akiLeft:Number;

	/**
	 * The amount of inter-character spacing to be added to the right side of the character,
	 * in thousandths of an em (that amount will not compress or expand during full-justification).
	 * @type {Number} double
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	akiRight:Number;

	/**
	 * The character alignment type.
	 * @type {StyleRunAlignmentType}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	alignment:StyleRunAlignmentType;

	/**
	 * The alternate glyphs form.
	 * @type {AlternateGlyphsForm}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	alternateGlyphs:AlternateGlyphsForm;

	/**
	 * If <b>true</b>, the automatic leading should be used.
	 * @type {Boolean}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	autoLeading:Boolean;

	/**
	 * The Japanese text baseline direction.
	 * @type {BaselineDirectionType}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	baselineDirection:BaselineDirectionType;

	/**
	 * The baseline position of text.
	 * @type {FontBaselineOption}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	baselinePosition:FontBaselineOption;

	/**
	 * The amount of shift in points of the text baseline.
	 * @type {Number} double
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	baselineShift:Number;

	/**
	 * The case of text.
	 * @type {FontCapsOption}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	capitalization:FontCapsOption;

	/**
	 * If <b>true</b>, the OpenType® connection forms should be used.
	 * @type {Boolean}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	connectionForms:Boolean;

	/**
	 * If <b>true</b>, the contextual ligature should be used.
	 * @type {Boolean}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	contextualLigature:Boolean;

	/**
	 * If <b>true</b>, the discretionary ligature should be used.
	 * @type {Boolean}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	discretionaryLigature:Boolean;

	/**
	 * Specifies which figure style to use in an OpenType font.
	 * @type {FigureStyleType}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	figureStyle:FigureStyleType;

	/**
	 * The color of the text fill.
	 * @type {Color} {@link Color} object
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	fillColor:Color;

	/**
	 * If <b>true</b>, the OpenType fractions should be used.
	 * @type {Boolean}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	fractions:Boolean;

	/**
	 * The character horizontal scaling factor expressed as a percentage (100 = 100%).
	 * @type {Number} double
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	horizontalScale:Number;

	/**
	 * If <b>true</b>, the Japanese OpenType font supports italics.
	 * @type {Boolean}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	italics:Boolean;

	/**
	 * The automatic kerning method to use.
	 * @type {AutoKernType}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	kerningMethod:AutoKernType;

	/**
	 * The language of text.
	 * @type {LanguageType}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	language:LanguageType;

	/**
	 * The amount of space between two lines of text, in points.
	 * @type {Number} double
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	leading:Number;

	/**
	 * If <b>true</b>, the ligature should be used.
	 * @type {Boolean}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	ligature:Boolean;

	/**
	 * If <b>true</b>, line breaks are allowed.
	 * @type {Boolean}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	noBreak:Boolean;

	/**
	 * The OpenType baseline position.
	 * @type {FontOpenTypePositionOption}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	openTypePosition:FontOpenTypePositionOption;

	/**
	 * If <b>true</b>, the OpenType ordinals should be used.
	 * @type {Boolean}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	ordinals:Boolean;

	/**
	 * If <b>true</b>, the OpenType ornaments should be used.
	 * @type {Boolean}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	ornaments:Boolean;

	/**
	 * If <b>true</b>, the fill of the text should be overprinted.
	 * @type {Boolean}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	overprintFill:Boolean;

	/**
	 * If <b>true</b>, the stroke of the text should be overprinted.
	 * @type {Boolean}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	overprintStroke:Boolean;

	/**
	 * Read-only. The object’s container.
	 * @type {Object}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	readonly parent:Object;

	/**
	 * If <b>true</b>, the Japanese OpenType font supports proportional glyphs.
	 * @type {Boolean}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	proportionalMetrics:Boolean;

	/**
	 * The character rotation angle in degrees.
	 * @type {Number} double
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	rotation:Number;

	/**
	 * Font size in points.
	 * @type {Number} double
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	size:Number;

	/**
	 * If <b>true</b>, characters use strike-through style.
	 * @type {Boolean}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	strikeThrough:Boolean;

	/**
	 * The color of the text stroke.
	 * @type {Color} {@link Color} object
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	strokeColor:Color;

	/**
	 * Line width of stroke.
	 * @type {Number} double
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	strokeWeight:Number;

	/**
	 * If <b>true</b>, the OpenType stylistic alternates should be used.
	 * @type {Boolean}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	stylisticAlternates:Boolean;

	/**
	 * If <b>true</b>, the OpenType swash should be used.
	 * @type {Boolean}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	swash:Boolean;

	/**
	 * The Tate-Chu-Yoko horizontal adjustment in points.
	 * @type {Number} long
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	tateChuYokoHorizontal:Number;

	/**
	 * The Tate-Chu-Yoko vertical adjustment in points.
	 * @type {Number} long
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	tateChuYokoVertical:Number;

	/**
	 * The text font.
	 * @type {TextFont} {@link TextFont} object
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	textFont:TextFont;

	/**
	 * If <b>true</b>, the OpenType titling alternates should be used.
	 * @type {Boolean}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	titling:Boolean;

	/**
	 * The tracking or range kerning amount, in thousandths of an em. An integer.
	 * @type {Number} long
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	tracking:Number;

	/**
	 * The percentage of space reduction around a Japanese character.
	 * @type {Number} double
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	Tsume:Number;

	/**
	 * Read-only. The class name of the object.
	 * @const
	 * @type {String}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	readonly typename:String;

	/**
	 * If <b>true</b>, characters are underlined.
	 * @type {Boolean}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	underline:Boolean;

	/**
	 * Character vertical scaling factor expressed as a percentage (100 = 100%).
	 * @type {Number} double
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	verticalScale:Number;

	/**
	 * Specifies how the characters in Wari-Chu text (an inset note in Japanese text) are divided into two or more lines.
	 * @type {Number} long
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	wariChuCharactersAfterBreak:Number;

	/**
	 * Specifies how the characters in Wari-Chu text (an inset note in Japanese text) are divided into two or more lines.
	 * @type {Number} long
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	wariChuCharactersBeforeBreak:Number;

	/**
	 * If <b>true</b>, Wari-Chu is enabled.
	 * @type {Boolean}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	wariChuEnabled:Boolean;

	/**
	 * The Wari-Chu justification.
	 * @type {WariChuJustificationType}
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	wariChuJustification:WariChuJustificationType;

	/**
	 * The Wari-Chu line gap.
	 * @type {Number} long
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	wariChuLineGap:Number;

	/**
	 * The number of Wari-Chu (multiple text lines fit into a space meant for one) lines.
	 * @type {Number} long
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	wariChuLines:Number;

	/**
	 * The Wari-Chu scale.
	 * @type {Number} double
	 * @see {@link CharacterAttributes}
	 * @since CS2
	 * @version CS2
	 */
	wariChuScale:Number;
}