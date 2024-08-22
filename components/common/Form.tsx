import {
    AspectRatio,
    TextArea,
    Box,
    Button,
    Card,
    Checkbox,
    Flex,
    Grid,
    Heading,
    HoverCard,
    IconButton,
    Inset,
    Link,
    Separator,
    Slider,
    Switch,
    Text,
    TextField,Theme,
  } from '@radix-ui/themes';
  type ExampleLayoutProps = React.ComponentPropsWithoutRef<typeof Flex> & {
    focusable?: boolean;
  };
  
  export const Form = ({ focusable = true, ...props }: ExampleLayoutProps) => {
    const tabIndex = focusable ? undefined : -1;
return(
<Flex gap="6" flexShrink="0" direction="column" width="816px" height="816px">
              <Card size="3">
                <Flex align="center" justify="between" mb="5">
                  <Heading as="h3" size="4" trim="both">
                    Your profile
                  </Heading>

                  <Flex my="-1" gap="4">
                    <Button tabIndex={tabIndex} size="2" variant="ghost">
                      Cancel
                    </Button>
                    <Button tabIndex={tabIndex} size="2" variant="ghost">
                      Save
                    </Button>
                  </Flex>
                </Flex>

                <Flex direction="column" gap="4">
                  <Flex asChild direction="column" gap="1">
                    <Text as="label" size="2" weight="medium">
                      <Text>Name</Text>
                      <TextField.Root
                        variant="classic"
                        tabIndex={tabIndex}
                        defaultValue="Vlad Moroz"
                      />
                    </Text>
                  </Flex>

                  <Flex asChild direction="column" gap="1">
                    <Text as="label" size="2" weight="medium">
                      <Text>Username</Text>
                      <TextField.Root
                        variant="classic"
                        tabIndex={tabIndex}
                        defaultValue="@vladmoroz"
                      />
                    </Text>
                  </Flex>

                  <Flex asChild direction="column" gap="1">
                    <Text as="label" size="2" weight="medium">
                      <Text>Email</Text>
                      <TextField.Root
                        variant="classic"
                        tabIndex={tabIndex}
                        defaultValue="hi@vladmoroz.com"
                      />
                    </Text>
                  </Flex>

                  <Flex direction="column" gap="2">
                    <Text size="2" weight="medium">
                      Privacy
                    </Text>
                    <Flex align="start" direction="column" gap="2">
                      <Flex asChild gap="2">
                        <Text as="label" size="2">
                          <Checkbox tabIndex={tabIndex} defaultChecked />
                          <Text>Display my listening history</Text>
                        </Text>
                      </Flex>

                      <Flex asChild gap="2">
                        <Text as="label" size="2">
                          <Checkbox tabIndex={tabIndex} />
                          <Text>Everyone can follow my activity</Text>
                        </Text>
                      </Flex>

                      <Flex asChild gap="2">
                        <Text as="label" size="2">
                          <Checkbox tabIndex={tabIndex} defaultChecked />
                          <Text>Show my playlists in search</Text>
                        </Text>
                      </Flex>
                    </Flex>
                  </Flex>

                  <Flex direction="column" gap="2">
                    <Text size="2" weight="medium">
                      Danger zone
                    </Text>
                    <Flex align="start" direction="column" gap="2">
                      <Link
                        href="#"
                        // onClick={(e) => e.preventDefault()}
                        tabIndex={tabIndex}
                        size="2"
                      >
                        Reset recommendations
                      </Link>
                      <Link
                        href="#"
                        // onClick={(e) => e.preventDefault()}
                        tabIndex={tabIndex}
                        size="2"
                        
                      >
                        Delete profile
                      </Link>
                    </Flex>
                  </Flex>
                </Flex>
              </Card>
              <Box maxWidth="400px">
  <Card size="2">
  <Theme accentColor="cyan" radius="full">
    <Flex direction="column" gap="3">
      <Grid gap="1">
        <Text as="div" weight="bold" size="2" mb="1">
          Feedback
        </Text>
        <TextArea placeholder="Write your feedback…" />
      </Grid>
      <Flex asChild justify="between">
        <label>
          <Text color="gray" size="2">
            Attach screenshot?
          </Text>
          <Switch size="1" defaultChecked />
        </label>
      </Flex>
      <Grid columns="2" gap="2">
        <Button variant="surface">Back</Button>
        <Button>Send</Button>
      </Grid>
    </Flex></Theme>
  </Card>
</Box>

              </Flex>
              )
              }
export default Form;