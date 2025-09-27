"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

/**
 * PromoCard
 * Props:
 * - name: string (nom du bookmaker)
 * - subtitle: string (sous-titre / type de bonus)
 * - code: string (code promo)
 * - bonus?: string (texte court sur le bonus)
 * - logo?: string (URL du logo)
 *
 * Usage example:
 * <PromoCard
 *   name="BookieBooster"
 *   subtitle="Bonus de bienvenue 100% jusqu'à 50€"
 *   code="WELCOME50"
 *   bonus="+50€ offerts sur le 1er dépôt"
 *   logo="/logos/bookiebooster.png"
 * />
 */

type Props = {
  name: string;
  subtitle: string;
  code: string;
  bonus?: string;
  logo?: string;
  link: string;
};

export default function PromoCard({ name, subtitle, code, bonus, logo,link }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      // Fallback: select text input
      const input = document.createElement("input");
      input.value = code;
      document.body.appendChild(input);
      input.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      } catch (_) {
        // ignore
      }
      document.body.removeChild(input);
    }
  };

  return (
    <article className="max-w-sm w-full bg-white  rounded-2xl overflow-hidden border border-gray-200">
      <div className="p-5 flex flex-col gap-4">
        {/* Header: logo + name */}
        <div className="flex items-center gap-3">
          <div className="w-20 h-20 flex items-center justify-center rounded-lg overflow-hidden">
            {logo ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={logo} alt={`${name} logo`} className="w-full h-full object-contain" />
            ) : (
              <div className="text-sm font-semibold text-gray-700">{name.charAt(0)}</div>
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
            <p className="text-sm text-gray-500 truncate">{subtitle}</p>
          </div>
        </div>

        {/* Bonus short line (optional) */}
        {bonus && (
          <div className="text-sm text-gray-700 bg-gray-50 rounded-md px-3 py-2 border border-gray-100">
            {bonus}
          </div>
        )}

        {/* Code area */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex-1 bg-black/5 rounded-md px-3 py-2 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Promotional code</p>
              <p className="font-mono font-semibold text-sm text-gray-900">{code}</p>
            </div>
            <button
              onClick={handleCopy}
              aria-label="Copier le code promo"
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 border rounded-md bg-white hover:bg-gray-50"
            >
              {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
              <span className="text-sm">{copied ? "copy" : "copy"}</span>
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href={link}
            className="flex-1 text-center bg-blue-500 text-white px-4 py-2 rounded-md font-medium shadow-sm hover:opacity-95"
            onClick={(e) => {
              // exemple: on pourrait tracker l'événement ici
            }}
          >
            bet now
          </a>
        </div>

        {/* Small note */}
        <p className="text-xs text-gray-400">Code provided for informational purposes - conditions and validity according to the bookmaker.</p>
      </div>
    </article>
  );
}
