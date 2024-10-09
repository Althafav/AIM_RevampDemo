
import { ContentItem, Elements } from '@kentico/kontent-delivery';

/**
 * Generated by '@kentico/kontent-model-generator@3.0.0'
 * Timestamp: Wed Oct 09 2024 10:58:22 GMT+0400 (Gulf Standard Time)
 *
 * Tip: You can replace 'ContentItem' with another generated class to fully leverage strong typing.
 */
export class Partnerspageitem extends ContentItem {
    public pagetitle!: Elements.TextElement;
    public name!: Elements.TextElement;
    public logo!: Elements.AssetsElement;
    public content!: Elements.RichTextElement;
    public website!: Elements.TextElement;
    public hero!: Elements.NumberElement;
    public russiaPartner!: Elements.NumberElement;
    public metatitle!: Elements.TextElement;
    public metadescription!: Elements.TextElement;
    constructor() {
        super({
            propertyResolver: ((elementName: string) => {
                if (elementName === 'russia_partner') {
                    return 'russiaPartner';
                }
                return elementName;
            })
        });
    }
}
