import React, { Component } from 'react';
import CatalogItem from '../components/CatalogItem/catalog_item';
import Database from '../database';

export default class Index extends Component {
  render() {
    return (
      <div className="cf pa3 mw9 center">
        <section className="fl w-100">
          {
            Database.getAll().map(item => (
              <CatalogItem item={item} />
            ))
          }
        </section>
      </div>
    );
  }
}

