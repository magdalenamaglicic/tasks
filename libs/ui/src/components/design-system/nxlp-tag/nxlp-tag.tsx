import { Component, h, Prop } from '@stencil/core';

enum TagCategory {
  Work = 'work',
  Important = 'important',
  Family = 'family',
  Personal = 'personal',
}

@Component({
  tag: 'nxlp-tag',
  styleUrl: 'nxlp-tag.scss',
})
export class NxlpTag {
  @Prop() category: TagCategory;
  @Prop() edit: boolean;

  render() {
    return (
      <span class={`tag ${this.category} ${this.edit && 'show-remove'}`}>
        <span class="text-xs">{this.category.toUpperCase()}</span>
        {this.edit && (
          <button class="icon-container">
            <tdn-ui-icon name="x" size="xs" />
          </button>
        )}
      </span>
    );
  }
}
