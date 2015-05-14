import test from 'tape'
import React from 'react'
import {addons} from 'react/addons'
import SupplierList from '../index.jsx'
const {TestUtils} = addons
const {isElement} = TestUtils

test('SupplierList: constructor', (t) => {
  const supplierList = React.createElement(SupplierList)
  t.ok(
    isElement(supplierList)
    , 'is a valid react component'
  )

  t.end()
})

