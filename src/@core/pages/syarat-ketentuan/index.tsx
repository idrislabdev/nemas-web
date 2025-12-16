'use client';

import React, { Fragment, useRef, useState } from 'react';
import syarat_ketentuan from './syarat_ketentuan';
import { ChevronRight } from '@untitled-ui/icons-react';

/* =========================
   Helpers
========================= */

// a, b, c ... z, aa, bb, cc
const getAlphabetRepeat = (index: number) => {
  const char = String.fromCharCode(97 + (index % 26));
  const repeat = Math.floor(index / 26) + 1;
  return char.repeat(repeat);
};

// i, ii, iii, iv, v
const toRoman = (num: number) => {
  const romans = [
    ['m', 1000],
    ['cm', 900],
    ['d', 500],
    ['cd', 400],
    ['c', 100],
    ['xc', 90],
    ['l', 50],
    ['xl', 40],
    ['x', 10],
    ['ix', 9],
    ['v', 5],
    ['iv', 4],
    ['i', 1],
  ] as const;

  let result = '';
  let n = num;

  for (const [letter, value] of romans) {
    while (n >= value) {
      result += letter;
      n -= value;
    }
  }
  return result;
};

/* =========================
   Component
========================= */

const SyaratKetentuanPageWrapper = () => {
  const [syarats, setSyarats] = useState(syarat_ketentuan);
  const contentRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const onChangeShow = (id: number) => {
    setSyarats((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, show: !item.show } : item
      )
    );
  };

  return (
    <main className="syarat-ketentuan-page sm:mobile-responsive md:mobile-responsive">
      <div className="main-section">
        <div className="header-container">
          <h2>Syarat Dan Ketentuan</h2>
        </div>

        <div className="faq-accordion">
          <ul className="!border-gray-200 !rounded-[4px] text-neutral-700">
            {syarats.map((item, index) => (
              <li key={item.id}>
                {/* ================= Header ================= */}
                <button
                  type="button"
                  onClick={() => onChangeShow(item.id)}
                  className="w-full"
                >
                  <div className="header-button">
                    <div className="button-title !gap-[8px]">
                      <span className="!text-[14px]/[21px] w-[24px]">
                        {index + 1}.
                      </span>
                      <label className="!text-[14px]/[21px]">
                        {item.title}
                      </label>
                    </div>

                    <span
                      className={`transition-transform duration-300 my-icon icon-sm ${
                        item.show ? 'rotate-90' : ''
                      }`}
                    >
                      <ChevronRight />
                    </span>
                  </div>
                </button>

                {/* ================= Content ================= */}
                <div
                  ref={(el) => {
                    contentRefs.current[item.id] = el;
                  }}
                  className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                  style={{
                    maxHeight: item.show
                      ? `${contentRefs.current[item.id]?.scrollHeight}px`
                      : '0px',
                  }}
                >
                  <div className="content-area py-2">
                    {/* single paragraph */}
                    {item.contents.length === 1 && !item.contents[0].subs && (
                      <p className="text-justify !text-[13px]/[17px]">
                        {item.contents[0].text}
                      </p>
                    )}

                    {/* list */}
                    {item.contents.length >= 1 && (
                      <ul className="flex flex-col !border-gray-200 !rounded-[4px]">
                        {item.contents.map((item2, index2) => (
                          <Fragment key={`${item.id}.${index2}`}>
                            <li className="flex gap-[8px] py-2">
                              <span className="min-w-[24px] text-sm">
                                {getAlphabetRepeat(index2)}.
                              </span>
                              <p className="text-justify !text-[13px]/[17px]">
                                {item2.text}
                              </p>
                            </li>

                            {/* ===== Sub list (Roman) ===== */}
                            {item2.subs && (
                              <ul className="ml-[32px] flex flex-col gap-[4px] !border-0">
                                {item2.subs.map((item3, index3) => (
                                  <li
                                    key={`${item.id}.${index2}.${index3}`}
                                    className="flex gap-[8px]"
                                  >
                                    <span className="min-w-[24px] text-[12px]">
                                      {toRoman(index3 + 1)}.
                                    </span>
                                    <p className="text-justify !text-[13px]/[17px]">
                                      {item3.text}
                                    </p>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </Fragment>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default SyaratKetentuanPageWrapper;
