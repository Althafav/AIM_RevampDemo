
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Wed Jul 17 2024 11:53:44 GMT+0400 (Gulf Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Previousprojectsitem extends ContentItem {
    public sectionTitle!: Elements.TextElement;
    public name!: Elements.TextElement;
    public content!: Elements.RichTextElement;
    public cardImage!: Elements.AssetsElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'section_title') {
                    return 'sectionTitle';
                }
                if (elementName === 'card_image') {
                    return 'cardImage';
                }
                return elementName;
            })
        });
    }
}
