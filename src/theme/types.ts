export type Size = keyof SizeKind;
export type CardSize = keyof CardSizes;
export type TypographyType = keyof TypographyTypes;

export type ButtonVariant = keyof ButtonVariantKind;
export type ButtonSize = keyof ButtonSizeKind;
export type LinkVariant = keyof LinkVariantKind;
export type HeaderVariant = keyof CardHeaderVariantKind;

export interface Config {
  body: {
    backgroundColor: string;
    textColor: string;
  };
  font: string;
  button: Button;
  fabButton: FabButton;
  link: Link;
  input: Input;
  textArea: TextArea;
  label: Label;
  fieldErrorMessage: FieldErrorMessage;
  card: Card;
  cardHeader: CardHeader;
  cardContent: CardContent;
  cardFooter: CardFooter;
  select: Select;
  option: Option;
  wrapperOption: WrapperOption;
  toggle: Toggle;
  typography: Typography;
  chip: Chip;
  table: Table;
  tableHeader: TableHeader;
  tableColumn: TableColumn;
  tableRow: TableRow;
  tableFooter: TableFooter;
  tableCheckbox: TableCheckbox;
  tablePagination: TablePagination;
  inputOtp: InputOtp;
  sidebar: Sidebar;
  navItem: NavItem;
  stepperContainer: StepperContainer;
  stepperSteps: StepperSteps;
  modal: Modal;
  modalOverlay: ModalOverlay;
  modalHeader: ModalHeader;
  modalContent: ModalContent;
  modalFooter: ModalFooter;
  logoutOverlay: LogoutOverlay;
  datePicker: DatePicker;
}

interface Padding {
  top: string;
  left: string;
  right: string;
  bottom: string;
}

type Margin = Padding;

interface Text {
  size: string;
  weight: string;
  font: string;
}

interface SizeKind {
  small: SizeSchema;
  medium: SizeSchema;
  large: SizeSchema;
}

interface SizeSchema {
  padding: Padding;
  text: Text;
  iconSize: string;
  minWidth: string;
  width: string;
  maxWidth: string;
  gap: string;
  minHeight: string;
  height: string;
  maxHeight: string;
}

interface VariantSchema {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  iconColor: string;
  hover: string;
  active: string;
  disabled: string;
  focus: string;
}

interface ButtonVariantKind {
  primary: VariantSchema;
  primaryOutline: VariantSchema;
  secondary: VariantSchema;
  secondaryOutline: VariantSchema;
  tertiary: VariantSchema;
  tertiaryOutline: VariantSchema;
  danger: VariantSchema;
  dangerOutline: VariantSchema;
  success: VariantSchema;
  successOutline: VariantSchema;
  info: VariantSchema;
  infoOutline: VariantSchema;
  warning: VariantSchema;
  warningOutline: VariantSchema;
  ghost: VariantSchema;
}

interface Shape {
  borderWidth: string;
  borderStyle: string;
  borderTopLeftRadius: string;
  borderTopRightRadius: string;
  borderBottomLeftRadius: string;
  borderBottomRightRadius: string;
}

interface ButtonSizeKind {
  small: SizeSchema;
  medium: SizeSchema;
  large: SizeSchema;
  xlarge: SizeSchema;
}

interface Button {
  size: ButtonSizeKind;
  variant: ButtonVariantKind;
  shape: Shape;
}

interface FabButtonSizeKind {
  small: Omit<SizeSchema, 'text'>;
  medium: Omit<SizeSchema, 'text'>;
  large: Omit<SizeSchema, 'text'>;
  xlarge: Omit<SizeSchema, 'text'>;
}

interface FabButtonVariantKind {
  primary: Omit<VariantSchema, 'textColor'>;
  primaryOutline: Omit<VariantSchema, 'textColor'>;
  secondary: Omit<VariantSchema, 'textColor'>;
  secondaryOutline: Omit<VariantSchema, 'textColor'>;
  tertiary: Omit<VariantSchema, 'textColor'>;
  tertiaryOutline: Omit<VariantSchema, 'textColor'>;
  danger: Omit<VariantSchema, 'textColor'>;
  dangerOutline: Omit<VariantSchema, 'textColor'>;
  success: Omit<VariantSchema, 'textColor'>;
  successOutline: Omit<VariantSchema, 'textColor'>;
  info: Omit<VariantSchema, 'textColor'>;
  infoOutline: Omit<VariantSchema, 'textColor'>;
  warning: Omit<VariantSchema, 'textColor'>;
  warningOutline: Omit<VariantSchema, 'textColor'>;
  ghost: Omit<VariantSchema, 'textColor'>;
}

interface FabButton {
  size: FabButtonSizeKind;
  variant: FabButtonVariantKind;
  shape: Shape;
}

interface LinkVariantSchema extends VariantSchema {
  textDecoration: string;
  opacity: string;
}

interface LinkVariantKind {
  underline: LinkVariantSchema;
  withoutUnderline: LinkVariantSchema;
}

interface Link {
  size: SizeKind;
  variant: LinkVariantKind;
  shape: {
    borderWidth: string;
    borderStyle: string;
    borderTopLeftRadius: string;
    borderTopRightRadius: string;
    borderBottomLeftRadius: string;
    borderBottomRightRadius: string;
  };
}

interface LinkVariantSchema extends VariantSchema {
  textDecoration: string;
  opacity: string;
}

interface LinkVariantKind {
  underline: LinkVariantSchema;
  withoutUnderline: LinkVariantSchema;
}

interface Link {
  size: SizeKind;
  variant: LinkVariantKind;
  shape: Shape;
}

interface InputApperanceSchema extends VariantSchema {
  placeholder: string;
  error: string;
  outline: string;
  readOnly: string;
}

interface Input {
  size: InputSizeKind;
  apperance: InputApperanceSchema;
  shape: Shape;
}

interface InputSizeSchema extends SizeSchema {
  withIconPadding: Padding;
  spacingShowPassord: string;
}

interface InputSizeKind {
  small: InputSizeSchema;
  medium: InputSizeSchema;
  large: InputSizeSchema;
}

interface TextArea {
  size: Omit<SizeSchema, 'iconSize'>;
  apperance: InputApperanceSchema;
  shape: Shape;
}

interface Label {
  textColor: string;
  textSize: string;
  textWeight: string;
  hover: string;
  focus: string;
  active: string;
  disabled: string;
  error: string;
  gap: string;
  required: Omit<Label, 'gap' | 'required'>;
}

interface FieldErrorMessage {
  textColor: string;
  textSize: string;
  textWeight: string;
  margin: Margin;
}

interface CardSizes extends SizeKind {
  full: SizeSchema;
}

interface CardHeaderVariantKind {
  primary: VariantSchema;
  secondary: VariantSchema;
  tertiary: VariantSchema;
  danger: VariantSchema;
  warning: VariantSchema;
  success: VariantSchema;
  info: VariantSchema;
  none: VariantSchema;
}

interface Card {
  size: CardSizes;
  shape: Shape;
  appearance: Omit<VariantSchema, 'iconColor' | 'textColor'>;
}

interface CardHeader {
  padding: Padding;
  width: string;
  variant: CardHeaderVariantKind;
  shape: Shape;
}

interface CardContent {
  padding: Padding;
  width: string;
  shape: Shape;
}

interface CardFooter extends CardContent {}

interface Select {
  size: SizeKind;
  apperance: InputApperanceSchema;
  shape: Shape;
}

interface Option {
  size: SizeKind;
  apperance: VariantSchema;
  shape: Shape;
}

interface WrapperOption {
  size: {
    small: Omit<SizeSchema, 'text' | 'iconSize'>;
    medium: Omit<SizeSchema, 'text' | 'iconSize'>;
    large: Omit<SizeSchema, 'text' | 'iconSize'>;
  };
  apperance: {
    borderColor: string;
    backgroundColor: string;
  };
  shape: Shape;
}

interface Toggle {
  size: {
    small: {
      width: string;
      height: string;
      dot: {
        width: string;
        height: string;
      };
      icon: {
        width: string;
        heigth: string;
      };
    };
    medium: {
      width: string;
      height: string;
      dot: {
        width: string;
        height: string;
      };
      icon: {
        width: string;
        heigth: string;
      };
    };
    large: {
      width: string;
      height: string;
      dot: {
        width: string;
        height: string;
      };
      icon: {
        width: string;
        heigth: string;
      };
    };
  };
  appearance: VariantSchema;
  dotAppearance: VariantSchema;
  dotShape: {
    borderRadius: string;
    border: string;
  };
  shape: {
    borderRadius: string;
    border: string;
  };
}

interface TypesKind {
  size: string;
  font: string;
  weight: string;
}

interface TypographyTypes {
  'heading-1': TypesKind;
  'heading-2': TypesKind;
  'heading-3': TypesKind;
  'heading-4': TypesKind;
  'heading-5': TypesKind;
  subtitle: TypesKind;
  paragraph: TypesKind;
  body: TypesKind;
  fields: TypesKind;
  button: TypesKind;
  label: TypesKind;
}

interface Typography {
  type: TypographyTypes;
  variant: CardHeaderVariantKind;
}

interface Chip {
  size: SizeKind;
  variant: CardHeaderVariantKind;
  shape: Shape;
}

interface Table {
  size: Omit<SizeSchema, 'text' | 'iconSize'>;
  appearance: {
    backgroundColor: string;
    borderColor: string;
  };
  shape: Shape;
}

type TableVariantHeader = CardHeaderVariantKind;

interface TableHeader {
  size: SizeSchema;
  shape: Shape;
  variants: TableVariantHeader;
}

interface TableColumn {
  size: SizeSchema;
  shape: Shape;
  appearance: VariantSchema;
}

interface TableRow {
  size: SizeSchema;
  shape: Shape;
  appearance: VariantSchema;
}

interface TableFooter {
  size: SizeSchema;
  shape: Shape;
  appearance: VariantSchema & {
    align: string;
    nextButton: string;
    nextIcon: string;
    previousButton: string;
    previousIcon: string;
  };
}

interface TableCheckbox {
  size: Omit<SizeSchema, 'text'>;
  shape: Shape;
  appearance: VariantSchema;
}

interface TablePagination {
  size: SizeSchema;
  shape: Shape;
  appearance: VariantSchema;
}

interface InputOtp {
  containerShape: Shape & {
    backgroundColor: string;
    height: string;
    width: string;
    padding: Padding;
    gap: string;
    marging: {
      marginTop: string;
      marginBottom: string;
      marginLeft: string;
      marginRight: string;
    };
  };
  inputShape: {
    inputpadding: Padding;
    inputBorderWidth: string;
    inputBorderStyle: string;
    inputBorderTopLeftRadius: string;
    inputBorderTopRightRadius: string;
    inputBorderBottomLeftRadius: string;
    inputBorderBottomRightRadius: string;
    inputText: Text & { textColor: string };
    inputHeight: string;
    inputWidth: string;
    inputBackgroundColor: string;
  };
}

interface Sidebar {
  size: SizeSchema & { widthExplicitRem: number };
  shape: Shape;
  appearance: VariantSchema;
}

interface NavItem {
  size: Omit<SizeSchema, 'height' | 'maxHeight' | 'minHeight'> & {
    height: number;
    maxHeight: number;
    fontSizeRem: number;
  };
  shape: Shape;
  appearance: VariantSchema;
}

interface StepperContainer {
  containerHeight: string;
  containerWidth: string;
  containerOverflow: string;
  containerBackgroundColor: string;
  containerShape: Shape;
}

interface StepperSteps {
  height: string;
  width: string;
  padding: {
    paddingTop: string;
    paddingBottom: string;
    paddingLeft: string;
    paddingRight: string;
  };
  margin: {
    margingTop: string;
    marginBottom: string;
    marginLeft: string;
    marginRight: string;
  };
  activeStyle: string;
  disabledStyle: string;
  evenStepStyle: {
    backgroundColor: string;
    hover: string;
    textColor: string;
    styles: string;
  };
  oddStepStyle: {
    backgroundColor: string;
    hover: string;
    textColor: string;
    styles: string;
  };
  textColor: string;
  shape: Shape;
}

interface Modal {
  shape: Shape;
  padding: Padding;
  backgroundColor: string;
}

interface ModalOverlay {
  backgroundColor: string;
  padding: Padding;
  position: string;
}

interface ModalHeader {
  padding: Padding;
  width: string;
  variant: CardHeaderVariantKind;
  shape: Shape;
}

interface ModalContent {
  padding: Padding;
  width: string;
  shape: Shape;
}

interface ModalFooter extends ModalContent {}

interface LogoutOverlay {
  backgroundColor: string;
  blur: string;
}

interface DatePicker {
  backgroundColor: string;
  border: string;
  cursor: string;
  textColor: string;
  dropdown: string;
  button: {
    textColor: string;
    backgroundColor: string;
  };
  daySelected: {
    textColor: string;
    backgroundColor: string;
  };
}
