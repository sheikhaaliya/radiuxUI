// components/ProductCard.tsx
"use client"
import React from 'react';
import { Box, Button, Card, Flex, Heading, IconButton, Link, Select, Separator, Text,Theme } from '@radix-ui/themes';
import Image from 'next/image';
import { Label } from '@radix-ui/react-label';
import { BookmarkFilledIcon, BookmarkIcon } from '@radix-ui/react-icons';


// const Home: React.FC<ExampleLayoutProps> = ({ focusable = true, ...props }) => {
interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  buttonLabel: string;
  focusable?: boolean;
}
interface ProductCardPropsWithLayout extends ProductCardProps{}

const ProductCard: React.FC<ProductCardPropsWithLayout> = ({ focusable = true,image, title, description, link, buttonLabel }) => {
    const [portalContainer, setPortalContainer] = React.useState<HTMLDivElement>(null);

      // Interactive elements may be not focusable for homepage demo purposes
      const tabIndex = focusable ? undefined : -1;
    
      // Simple state to make the example functional
      const [state, setState] = React.useState({
        sneakersBookmarked: false,
        jeansBookmarked: false,
        delivery: '',
        size: '9',
        material: '',
        color: '',
        productMaterial: '',
        productColor: '',
        productSizes: [],
      });
  return (
    <Card size="1">
    <Flex mb="2" position="relative" >
      <Flex justify="center" width="100%"><Image
     alt="product"
        width="100"
        height="200"
        src={image}
        quality={90}
        style={{ borderRadius: 'var(--radius-1)',width:"280px",height:"280px" }}
      /></Flex>

      <Theme appearance="light" asChild>
        <Flex
          align="center"
          justify="center"
          position="absolute"
          bottom="0"
          right="0"
          width="32px"
          height="32px"
          style={{ borderRadius: 'var(--radius-3)' }}
          m="2"
        >
          <IconButton
            size="2"
            tabIndex={tabIndex}
            color="gray"
            variant="ghost"
            highContrast={state.sneakersBookmarked}
            onClick={() =>
              setState((currentState) => ({
                ...currentState, 
                sneakersBookmarked: !currentState.sneakersBookmarked,
              }))
            }
          >
            {state.sneakersBookmarked ? <BookmarkFilledIcon /> : <BookmarkIcon />}
          </IconButton>
        </Flex>
      </Theme>  
    </Flex>

    <Flex align="end" justify="between" mb="2">
      <Box>
        <Flex mb="1">
          <Link
            href="#"
            underline="hover"
            size="2"
            color="gray"
            highContrast
            tabIndex={tabIndex}
            onClick={(e) => e.preventDefault()}
          >
            Footwear
          </Link>
        </Flex>

        <Heading as="h3" size="3">
          {title}
        </Heading>
      </Box>

      <Text size="6" weight="bold">
        $149
      </Text>
    </Flex>

    <Text as="p" size="2" color="gray" mb="4">
      {description}
    </Text>

    <Box>
      <Separator size="4" my="4" />
    </Box>

    <Flex gap="2" align="end">
      <Flex direction="column" flexGrow="1">
        <Label asChild>
          <Text size="1" color="gray" mb="1">
            Color
          </Text>
        </Label>

        <Select.Root defaultValue="Pastel" size="2">
          <Select.Trigger tabIndex={tabIndex} variant="soft" />
          <Select.Content variant="soft" container={portalContainer} position="popper">
            <Select.Item value="Pastel">Pastel</Select.Item>
            <Select.Item value="Bright">Bright</Select.Item>
          </Select.Content>
        </Select.Root>
      </Flex>

      <Flex direction="column" minWidth="80px">
        <Label asChild>
          <Text size="1" color="gray" mb="1">
            Size
          </Text>
        </Label>
        <Select.Root defaultValue="8" size="2">
          <Select.Trigger tabIndex={tabIndex} variant="soft" />
          <Select.Content variant="soft" container={portalContainer} position="popper">
            {Array.from({ length: 12 }, (_, i) => (
              <Select.Item key={i} value={String(i * 0.5 + 5)}>
                {i * 0.5 + 5}
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Root>
      </Flex>

      <Button tabIndex={tabIndex} size="2" variant="solid" color="gray" highContrast>
        Buy
      </Button>
    </Flex>
  </Card>
  );
};

export default ProductCard;
