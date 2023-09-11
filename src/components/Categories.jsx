import React from 'react'
import { Label, Select } from 'flowbite-react';

const Categories = () => {
    return (
        <div
          className="max-w-xs mx-auto p-5"
          id="select"
        >
          <div className="mb-1 block text-center">
            <Label
              htmlFor="categories"
              value="Categories"
            />
          </div>
          <Select
            id="Categories"
            required
          >
            <option>
              All
            </option>
            <option>
              Science
            </option>
            <option>
              Horror
            </option>
            <option>
              Technology
            </option>
            <option>
              Adventure
            </option>
          </Select>
        </div>
      )
    }

export default Categories