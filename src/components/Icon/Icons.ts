import {
  X,
  Search,
  Plus,
  Minus,
  Pencil,
  Trash2,
  Download,
  Upload,
  Filter,
  ArrowUpDown,
  RefreshCw,
  Settings,
  User,
  Users,
  Mail,
  Phone,
  Calendar,
  Clock,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Check,
  TriangleAlert,
  Info,
  CircleX,
  CircleCheck,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
} from "lucide-solid";

import { createIcon } from "./Icon";

export const Icon = {
  Close: createIcon(X),

  Search: createIcon(Search),

  Plus: createIcon(Plus),

  Minus: createIcon(Minus),

  Edit: createIcon(Pencil),

  Delete: createIcon(Trash2),

  Download: createIcon(Download),

  Upload: createIcon(Upload),

  Filter: createIcon(Filter),

  Sort: createIcon(ArrowUpDown),

  Refresh: createIcon(RefreshCw),

  Settings: createIcon(Settings),

  User: createIcon(User),

  Users: createIcon(Users),

  Mail: createIcon(Mail),

  Phone: createIcon(Phone),

  Calendar: createIcon(Calendar),

  Clock: createIcon(Clock),

  Eye: createIcon(Eye),

  EyeOff: createIcon(EyeOff),

  Lock: createIcon(Lock),

  Unlock: createIcon(Unlock),

  Check: createIcon(Check),

  Warning: createIcon(TriangleAlert),

  Info: createIcon(Info),

  Error: createIcon(CircleX),

  Success: createIcon(CircleCheck),

  ArrowLeft: createIcon(ArrowLeft),

  ArrowRight: createIcon(ArrowRight),

  ArrowUp: createIcon(ArrowUp),

  ArrowDown: createIcon(ArrowDown),

  ChevronLeft: createIcon(ChevronLeft),

  ChevronRight: createIcon(ChevronRight),

  ChevronUp: createIcon(ChevronUp),

  ChevronDown: createIcon(ChevronDown),
} as const;
