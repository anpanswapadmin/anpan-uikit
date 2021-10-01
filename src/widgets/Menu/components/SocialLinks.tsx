import React from "react";

import Flex from "../../../components/Box/Flex";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Link from "../../../components/Link/Link";

import { socials } from "../config";
import Text from "../../../components/Text/Text";


const SocialLinks: React.FC = () => (
  <Flex>
    {socials.map((social, index) => {

      const mr = index < socials.length - 1 ? "24px" : 0;

        return (
          <Dropdown key={social.label} position="top" target={<Text color="secondary" fontSize="20px"> {'Products'}</Text>}>
            {social.items.map((item) => (
              <Link external key={item.label} href={item.href} aria-label={item.label} color="textSubtle" target="_self">
                {item.label}
              </Link>
            ))}
          </Dropdown>
        );

      
    })}
  </Flex>
);

export default React.memo(SocialLinks, () => true);
