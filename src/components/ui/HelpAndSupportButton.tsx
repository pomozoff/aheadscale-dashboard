"use client";

import Button from "@components/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@components/DropdownMenu";
import { cn } from "@utils/helpers";
import {
  ArrowUpRightIcon,
  BookText,
  CircleQuestionMark,
  Github,
  TriangleAlert,
} from "lucide-react";
import { useState } from "react";

const guide =
  "https://github.com/pomozoff/aheadscale-client/blob/aheadscale/docs/aheadscale/user-guide.md";
const links = [
  { href: guide, label: "Помощь Aheadscale", icon: BookText },
  {
    href: guide + "#решение-проблем",
    label: "Решение проблем",
    icon: TriangleAlert,
  },
  {
    href: "https://github.com/pomozoff/aheadscale-client",
    label: "Исходный код Aheadscale",
    icon: Github,
  },
];

export default function HelpAndSupportButton() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <DropdownMenu
      modal={false}
      open={dropdownOpen}
      onOpenChange={setDropdownOpen}
    >
      <DropdownMenuTrigger asChild>
        <Button
          size="xs"
          variant="default-outline"
          aria-label="Помощь Aheadscale"
          className={cn(
            "!rounded-full h-[38px] w-[38px] !p-0",
            dropdownOpen && "text-white",
          )}
        >
          <CircleQuestionMark size={18} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          Aheadscale
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {links.map(({ href, label, icon: Icon }) => (
          <DropdownMenuItem
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            asChild
          >
            <div className="flex gap-3 items-center">
              <Icon size={14} />
              {label}
            </div>
            <DropdownMenuShortcut>
              <ArrowUpRightIcon size={16} />
            </DropdownMenuShortcut>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
